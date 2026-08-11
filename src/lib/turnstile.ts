// Public Cloudflare Turnstile site key for marcoweb.org. This is public by design
// (it renders into client HTML). The matching SECRET key lives only in the Netlify
// env var TURNSTILE_SECRET_KEY and is used server-side by the contact/subscribe
// functions to verify the token. Never put the secret here.
export const TURNSTILE_SITE_KEY = '0x4AAAAAAENNlVIXi19kogaU'
