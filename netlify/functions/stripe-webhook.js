import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

// Stripe webhook for the course. On a completed one-time checkout it grants the
// buyer Pro for 90 days by setting profiles.plan / plan_expires_at. Uses the
// service-role key (server-only) because users cannot write those columns.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const PRO_DAYS = 90

export const handler = async (event) => {
  const sig = event.headers['stripe-signature']

  // Stripe needs the exact raw body to verify the signature.
  const rawBody = event.isBase64Encoded ? Buffer.from(event.body, 'base64') : event.body

  let webhookEvent
  try {
    webhookEvent = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` }
  }

  try {
    if (webhookEvent.type === 'checkout.session.completed') {
      const session = webhookEvent.data.object
      const userId = session.client_reference_id || (session.metadata && session.metadata.userId)

      if (userId) {
        const expires = new Date(Date.now() + PRO_DAYS * 24 * 60 * 60 * 1000).toISOString()
        const { error } = await supabase
          .from('profiles')
          .update({ plan: 'pro', plan_expires_at: expires })
          .eq('id', userId)
        if (error) throw error
      }
    }

    return { statusCode: 200, body: JSON.stringify({ received: true }) }
  } catch (error) {
    console.error('stripe-webhook error:', error)
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) }
  }
}
