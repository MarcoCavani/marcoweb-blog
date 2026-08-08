// Superseded. The course now has its own auth on this site (decision: two
// independent products, separate Supabase project, reuse the ITGC tool's
// patterns). See:
//   · src/lib/supabase.ts   the browser client (PUBLIC_ anon key)
//   · src/lib/auth.ts       getEntitlement(), sign-in / sign-up, mock counting
//   · supabase/schema.sql   profiles / progress / mock_attempts + row-level security
//
// The one rule that does not change: a client-side check decides what the UI
// OFFERS, it cannot protect content. Anything a static page renders into HTML is
// readable via view-source. That is why the paywall sits on the mock-exam
// EXPERIENCE and premium tools, never on lesson bodies (which stay free anyway).
export {}
