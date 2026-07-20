// Shared entitlement contract between marcoweb.org and itgc.marcoweb.org.
//
// The tool already owns identity and billing: Supabase Auth for accounts, a
// `subscriptions` table keyed by user_id, and Stripe webhooks that maintain it.
// A subscriber is `subscriptions.status === 'active'`, and admins are flagged by
// `is_admin` on the user profile.
//
// This site therefore does NOT implement its own auth or checkout. It reads the
// same Supabase project, so one account and one subscription cover both — which
// is the behaviour we want and avoids a second billing system to reconcile.
//
// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT — WHAT THIS FILE DOES AND DOES NOT GIVE YOU
//
// This is a CLIENT-SIDE check. It is enough to decide what the UI offers, and it
// is NOT enough to protect content. Anything rendered into the static HTML is
// readable by anyone who views source, logged in or not.
//
// So: gated lesson BODIES must not be built into the page. Until that is wired
// up, mark lessons `gated: false` and keep the paid material out of this repo.
// The delivery options, cheapest first:
//
//   1. Netlify Function that verifies the Supabase JWT and returns lesson body
//      from the database. Static site stays static; content never ships to the
//      browser unentitled.
//   2. Supabase row-level security on a `lesson_content` table, fetched client
//      side. RLS enforces entitlement in the database, so the anon key is safe.
//   3. Astro SSR/hybrid rendering with the check server side. Biggest change,
//      only worth it if a lot of the site becomes dynamic.
//
// Option 2 fits this stack best: the tool already uses Supabase directly from
// the browser, so there is an established pattern to follow.
// ─────────────────────────────────────────────────────────────────────────────

export type Entitlement = {
  signedIn: boolean
  subscribed: boolean
  admin: boolean
}

export const ANONYMOUS: Entitlement = { signedIn: false, subscribed: false, admin: false }

/** Where to send someone who needs to sign in or subscribe. */
export const TOOL_URL = 'https://itgc.marcoweb.org'
export const SIGN_IN_URL = `${TOOL_URL}/login`

/**
 * Reads entitlement from the shared Supabase project.
 *
 * Requires PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY, which are the same
 * public values the tool ships as VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY.
 * The anon key is designed to be public — row-level security is what protects
 * data, so it is safe in the bundle. Never put a service-role key here.
 *
 * Returns ANONYMOUS rather than throwing: a training page must still render if
 * the auth call fails.
 */
export async function getEntitlement(): Promise<Entitlement> {
  const url = import.meta.env.PUBLIC_SUPABASE_URL
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return ANONYMOUS

  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(url, key)

    const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) return ANONYMOUS

    const [{ data: sub }, { data: profile }] = await Promise.all([
      supabase.from('subscriptions').select('status').eq('user_id', session.user.id).maybeSingle(),
      supabase.from('users').select('is_admin').eq('id', session.user.id).maybeSingle(),
    ])

    const admin = !!profile?.is_admin
    return {
      signedIn: true,
      // Admins get full access, matching the tool's behaviour.
      subscribed: admin || sub?.status === 'active',
      admin,
    }
  } catch {
    return ANONYMOUS
  }
}
