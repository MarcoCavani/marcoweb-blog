// Contact form handler. Replaces Netlify Forms, which does not reliably process
// submissions on this Astro site (the POST 404s). Emails the message to Marco via
// Brevo transactional email, with the sender's address as reply-to so he can
// reply straight from his inbox. Same Brevo + honeypot pattern as subscribe.js.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'marco@marcoweb.org'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'marco@marcoweb.org'

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) }
  }

  // Honeypot: bots fill this; humans never see it. Silent success, no email sent.
  if (body['bot-field']) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  }

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const subject = (body.subject || '').trim()
  const message = (body.message || '').trim()

  if (!name || !email || !email.includes('@') || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, a valid email and a message are required' }) }
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured' }) }
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        sender: { name: 'MarcoWeb Contact Form', email: FROM_EMAIL },
        to: [{ email: TO_EMAIL }],
        replyTo: { email, name: name || email },
        subject: `[Contact] ${subject || 'New message'}`,
        textContent: `From: ${name} <${email}>\nSubject: ${subject || '(none)'}\n\n${message}`,
      }),
    })

    if (res.status >= 200 && res.status < 300) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) }
    }
    const detail = await res.text()
    return { statusCode: 502, body: JSON.stringify({ error: 'Email send failed', detail }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
