import Stripe from 'stripe'

// Starts a Stripe Checkout for the one-time "CISA Pro" purchase (AU$39, 90 days).
// Adapted from the ITGC tool's create-template-checkout. On success the webhook
// (stripe-webhook.js) flips the user's profiles.plan to 'pro'.
//
// Trusting the client-supplied userId is safe here: the webhook only ever runs on
// a real, Stripe-signed payment, so nobody can grant themselves Pro for free. The
// worst case is paying to upgrade someone else's account, which is not an attack.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_COURSE)

// STRIPE_PRICE_ID_COURSE should be a price_ id, but the Stripe UI makes it easy to
// copy a prod_ id by mistake (the Products list only shows those). Accept either:
// a prod_ id is resolved to that product's live price, so a paste slip still works.
let cachedPrice = null
async function resolvePriceId(configured) {
  if (!configured) throw new Error('STRIPE_PRICE_ID_COURSE is not set')
  if (configured.startsWith('price_')) return configured
  if (cachedPrice && cachedPrice.from === configured) return cachedPrice.id
  if (configured.startsWith('prod_')) {
    const product = await stripe.products.retrieve(configured)
    let id = product.default_price
    id = typeof id === 'object' && id ? id.id : id
    if (!id) {
      const prices = await stripe.prices.list({ product: configured, active: true, limit: 1 })
      id = prices.data[0] && prices.data[0].id
    }
    if (!id) throw new Error(`No active price found for product ${configured}`)
    cachedPrice = { from: configured, id }
    return id
  }
  return configured // unknown format: let Stripe surface the error
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  if (!process.env.STRIPE_SECRET_KEY_COURSE || !process.env.STRIPE_PRICE_ID_COURSE) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Checkout not configured' }) }
  }

  try {
    const { userId, email, origin } = JSON.parse(event.body || '{}')
    if (!userId) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Not signed in' }) }
    }

    const base = origin || 'https://marcoweb.org'
    const price = await resolvePriceId(process.env.STRIPE_PRICE_ID_COURSE)
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price, quantity: 1 }],
      allow_promotion_codes: true,
      customer_email: email || undefined,
      client_reference_id: userId,
      success_url: `${base}/account/?upgraded=1`,
      cancel_url: `${base}/pricing/`,
      metadata: { type: 'course-pro', userId },
    })

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) }
  }
}
