-- ============================================================================
-- marcoweb.org course, Phase 1 access-control schema
-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor -> New query).
-- Safe to re-run: every statement is guarded with "if not exists" / "or replace".
--
-- What it sets up:
--   profiles       one row per user: role (user/admin) + plan (free/pro)
--   progress       cross-device lesson progress (the reason to register)
--   mock_attempts  one row per mock exam, drives the free 5-attempt cap + analytics
--   is_admin()     helper used by the row-level-security policies
--   a trigger that auto-creates a profile when someone signs up
--
-- The rule this enforces: a user can read and write only their own rows, can
-- never change their own plan/role, and can never delete a mock attempt (so the
-- free cap cannot be reset by clearing data). Admins can read everyone.
-- ============================================================================

-- ---------- tables ----------------------------------------------------------

create table if not exists public.profiles (
  id              uuid primary key references auth.users (id) on delete cascade,
  role            text not null default 'user' check (role in ('user','admin')),
  plan            text not null default 'free' check (plan in ('free','pro')),
  plan_expires_at timestamptz,                       -- null = free / no expiry
  created_at      timestamptz not null default now()
);

create table if not exists public.progress (
  user_id     uuid not null references auth.users (id) on delete cascade,
  lesson_id   text not null,                         -- the content slug
  completed   boolean not null default true,
  quiz_score  int,
  updated_at  timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create table if not exists public.mock_attempts (
  id        uuid primary key default gen_random_uuid(),
  user_id   uuid not null references auth.users (id) on delete cascade,
  exam_id   text not null,                           -- e.g. 'domain-5' or 'full'
  score     int  not null,
  total     int  not null,
  detail    jsonb,                                   -- per-topic breakdown, for analytics
  taken_at  timestamptz not null default now()
);
create index if not exists mock_attempts_user_idx on public.mock_attempts (user_id);

-- ---------- helpers ---------------------------------------------------------

-- SECURITY DEFINER bypasses RLS, so policies can call this without recursing
-- back into profiles' own policies.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- Create a profile row automatically on signup.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- row-level security ---------------------------------------------

alter table public.profiles      enable row level security;
alter table public.progress      enable row level security;
alter table public.mock_attempts enable row level security;

-- profiles: read your own row (admins read all). There is deliberately NO client
-- update policy: plan and role are set only by the Stripe webhook (Phase 2) or an
-- admin, both using the service-role key, which bypasses RLS. A user therefore
-- cannot promote themselves to admin or pro.
drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles
  for select using (id = auth.uid() or public.is_admin());

-- progress: full read/write on your own rows only.
drop policy if exists progress_rw_own on public.progress;
create policy progress_rw_own on public.progress
  for all
  using      (user_id = auth.uid())
  with check (user_id = auth.uid());

-- mock_attempts: read your own (admins read all) and insert your own. No update
-- or delete policy exists, so attempts are append-only and the free cap holds.
drop policy if exists mock_select_own on public.mock_attempts;
create policy mock_select_own on public.mock_attempts
  for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists mock_insert_own on public.mock_attempts;
create policy mock_insert_own on public.mock_attempts
  for insert with check (user_id = auth.uid());

-- ============================================================================
-- After running this:
--   1. Sign up once through the site (or Supabase Auth -> Users -> Add user).
--   2. Table editor -> profiles -> your row -> set role = 'admin'.
--      That makes you the superuser. There is no self-service path to admin,
--      which is the point.
-- ============================================================================
