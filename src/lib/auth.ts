// Client-side auth + entitlement helpers for the course.
//
// Everything here runs in the browser and only decides what the UI OFFERS.
// Real enforcement of paid limits lives server-side: row-level security in
// supabase/schema.sql, plus the Stripe webhook and functions coming in Phase 2.
// A client check can be bypassed; that is fine, because nothing gated here is
// secret content (the lessons are free), only the mock-exam experience.
import { supabase } from './supabase'

export type Plan = 'free' | 'pro'

export type Entitlement = {
  signedIn: boolean
  email: string | null
  name: string | null
  admin: boolean
  plan: Plan
  planExpiresAt: string | null
}

export const ANONYMOUS: Entitlement = {
  signedIn: false, email: null, name: null, admin: false, plan: 'free', planExpiresAt: null,
}

// Free mock-exam attempts before Pro is required. Admins and Pro are unlimited.
export const FREE_MOCK_LIMIT = 5

/** Reads the current user's role + plan. Safe for anonymous and missing-profile. */
export async function getEntitlement(): Promise<Entitlement> {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return ANONYMOUS
  const email = session.user.email ?? null
  const meta = session.user.user_metadata || {}
  const name = meta.full_name || meta.name || (email ? email.split('@')[0] : null)

  const { data, error } = await supabase
    .from('profiles')
    .select('role, plan, plan_expires_at')
    .eq('id', session.user.id)
    .maybeSingle()

  // If the profile row is missing (e.g. schema not applied yet), fall back to a
  // safe free / non-admin default rather than throwing.
  if (error || !data) {
    return { signedIn: true, email, name, admin: false, plan: 'free', planExpiresAt: null }
  }

  const expired = data.plan_expires_at ? new Date(data.plan_expires_at) < new Date() : false
  return {
    signedIn: true,
    email,
    name,
    admin: data.role === 'admin',
    plan: expired ? 'free' : (data.plan as Plan),
    planExpiresAt: data.plan_expires_at ?? null,
  }
}

/** How many mock exams this user has recorded. Admins/Pro ignore the cap. */
export async function mockAttemptsUsed(): Promise<number> {
  const { count } = await supabase
    .from('mock_attempts')
    .select('id', { count: 'exact', head: true })
  return count ?? 0
}

export async function recordMockAttempt(
  examId: string, score: number, total: number, detail?: unknown,
) {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return
  await supabase.from('mock_attempts').insert({
    user_id: session.user.id, exam_id: examId, score, total, detail: detail ?? null,
  })
}

// ---- auth actions -----------------------------------------------------------

export function signUpWithPassword(email: string, password: string, fullName?: string) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: siteUrl('/account'),
      // Stored on the auth user's metadata so the nav can greet them by name
      // without a database round-trip.
      data: fullName ? { full_name: fullName } : undefined,
    },
  })
}

export function signInWithPassword(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password })
}

export function signInWithGoogle(next = '/account') {
  return supabase.auth.signInWithOAuth({
    provider: 'google', options: { redirectTo: siteUrl(next) },
  })
}

export function requestPasswordReset(email: string) {
  return supabase.auth.resetPasswordForEmail(email, { redirectTo: siteUrl('/reset') })
}

export function updatePassword(password: string) {
  return supabase.auth.updateUser({ password })
}

export function signOut() {
  return supabase.auth.signOut()
}

export function onAuthChange(cb: (signedIn: boolean) => void) {
  return supabase.auth.onAuthStateChange((_event, session) => cb(!!session))
}

function siteUrl(path: string) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://marcoweb.org'
  return origin + path
}
