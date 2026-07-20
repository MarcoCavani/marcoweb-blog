// Entitlement notes for paid training. NOTHING CALLS THIS YET — it is a decision
// record, kept next to the code it would affect.
//
// ─── CURRENT STATE ───────────────────────────────────────────────────────────
// This site has NO Supabase connection: `@supabase/supabase-js` is not a
// dependency and no PUBLIC_SUPABASE_* env vars are set. All lessons are
// `gated: false` and free. That is the safe default; leave it until the
// architecture question below is settled.
//
// ─── WHAT ALREADY EXISTS (in the tool, not here) ─────────────────────────────
// itgc.marcoweb.org (racm-itgc-saas — Vue + Supabase + Stripe) already owns:
//   · Supabase Auth, with login / signup / forgot-password / reset-password
//   · a `subscriptions` table keyed by user_id; entitled === status 'active'
//   · `is_admin` on the users table for unlimited access
//   · Netlify functions: create-subscription-checkout, customer-portal,
//     stripe-webhook
//   · vue-router guards using `meta: { requiresAuth: true }`, and an /upgrade route
//
// ─── THE FORK ────────────────────────────────────────────────────────────────
// A. HYBRID (recommended). Free lessons stay here for SEO and as the funnel;
//    paid modules live inside the tool, behind the auth and subscription checks
//    that already work. Adding /training routes there is mostly configuration.
//    · No Supabase on this site, no second auth surface to keep in sync.
//    · No content-protection problem: the tool is already behind login, whereas
//      a static site cannot hide anything it renders into HTML.
//    · One subscription covers tool + training, which was the original goal.
//
// B. EVERYTHING HERE. Install @supabase/supabase-js, set PUBLIC_SUPABASE_URL and
//    PUBLIC_SUPABASE_ANON_KEY in Netlify (same public values as the tool's VITE_
//    ones — the anon key is meant to be public; a service-role key must NEVER be
//    used client side), and store paid lesson bodies in a Supabase table with
//    row-level security so entitlement is enforced in the database.
//    · Keeps one domain, but adds a second place auth can break.
//    · Paid bodies must NOT live in this repo or in the built HTML.
//
// C. STAY FREE. Defer monetisation; keep building audience. Costs nothing now.
//
// ─── THE RULE THAT DOES NOT CHANGE ───────────────────────────────────────────
// A client-side check can decide what the UI OFFERS. It cannot protect content.
// Anything rendered into a static page is readable via view-source by anyone,
// signed in or not. If a lesson is worth money, its body must be fetched at
// runtime behind a real check (option A or B) — never shipped in the build.
// ─────────────────────────────────────────────────────────────────────────────

export type Entitlement = {
  signedIn: boolean
  subscribed: boolean
  admin: boolean
}

export const ANONYMOUS: Entitlement = { signedIn: false, subscribed: false, admin: false }

/** Where to send someone who needs to sign in, subscribe, or manage billing. */
export const TOOL_URL = 'https://itgc.marcoweb.org'
export const SIGN_IN_URL = `${TOOL_URL}/login`
export const UPGRADE_URL = `${TOOL_URL}/upgrade`
