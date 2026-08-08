// Browser Supabase client for the course.
//
// This uses the PUBLIC_ anon key, which is meant to ship to the client. What
// keeps it safe is row-level security (see supabase/schema.sql), not secrecy of
// the key. NEVER import a service-role key into anything under src/, it would end
// up in the client bundle and bypass RLS.
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.PUBLIC_SUPABASE_URL
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

if (!url || !anon) {
  // Fail loudly and early rather than deep inside an auth call. In production
  // these come from Netlify env vars; in dev from the gitignored .env file.
  console.error(
    '[supabase] Missing PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY. ' +
    'Set them in Netlify env vars (and .env for local dev).'
  )
}

export const supabase: SupabaseClient = createClient(url ?? '', anon ?? '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    // Lets OAuth (Google) and recovery links hand their token back via the URL.
    detectSessionInUrl: true,
  },
})
