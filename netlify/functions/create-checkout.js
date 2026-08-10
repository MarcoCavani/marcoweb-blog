import Stripe from 'stripe'

// Starts a Stripe Checkout for the one-time "CISA Pro" purchase (EUR 39, 90 days).
// Adapted from the ITGC tool's create-template-checkout. On success the webrehook
// (stripe-webhook.js) flips the user's profiles.plan to 'pro'.
//
// Trusting the client-supplied userId is safe here: the webhook only ever runs on
// a real, Stripe-signed payment, so nobody can grant themselves Pro for free. The
// worst case is paying to upgrade someone else's account, which is not an attack.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PRICE_ID) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Checkout not configured' }) }
  }

  try {
    const { userId, email, origin } = JSON.parse(event.body || '{}')
    if (!userId) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Not signed in' }) }
    }

    const base = origin || 'https://marcoweb.org'
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
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
