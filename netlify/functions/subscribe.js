import https from 'https'

const BREVO_WELCOME_TEMPLATE_ID = 2

function brevoRequest(method, path, payload, apiKey) {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify(payload)
    var req = https.request(
      {
        hostname: 'api.brevo.com',
        path: path,
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
          'api-key': apiKey,
        },
      },
      function (res) {
        var body = ''
        res.on('data', function (chunk) { body += chunk })
        res.on('end', function () { resolve({ status: res.statusCode, body: body }) })
      }
    )
    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

// Verify a Cloudflare Turnstile token. Only used when TURNSTILE_SECRET_KEY is
// set; otherwise the honeypot is the sole bot check.
async function verifyTurnstile(secret, token, ip) {
  try {
    var res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: secret, response: token, remoteip: ip }),
    })
    var out = await res.json()
    return !!out.success
  } catch (e) {
    return false
  }
}

export const handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  var body
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) }
  }

  // Honeypot: real people leave this empty; bots fill it. Pretend success so the
  // bot gets no signal, but never add it to Brevo.
  if (body.company) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  }

  // Turnstile: once the secret is set, a valid token is REQUIRED, so a direct POST
  // with no token is rejected. Before the secret exists, the honeypot alone applies.
  if (process.env.TURNSTILE_SECRET_KEY) {
    var human = body.turnstileToken && await verifyTurnstile(
      process.env.TURNSTILE_SECRET_KEY,
      body.turnstileToken,
      event.headers['x-forwarded-for'] || ''
    )
    if (!human) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Verification failed' }) }
    }
  }

  var email = body.email
  if (!email || !email.includes('@')) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid email required' }) }
  }

  var apiKey = process.env.BREVO_API_KEY
  var listId = parseInt(process.env.BREVO_LIST_ID || '2', 10)

  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured' }) }
  }

  try {
    var result = await brevoRequest(
      'POST',
      '/v3/contacts',
      { email: email, listIds: [listId], updateEnabled: true },
      apiKey
    )

    var sendWelcome = false

    if (result.status === 201 || result.status === 204) {
      sendWelcome = true
    } else {
      var parsed = {}
      try { parsed = JSON.parse(result.body) } catch (e) {}

      if (parsed.code === 'duplicate_parameter') {
        // already subscribed, no welcome email
      } else {
        return { statusCode: 500, body: JSON.stringify({ error: 'Brevo error', detail: result.body }) }
      }
    }

    // Send welcome email to anyone actively subscribing (new or returning)
    if (sendWelcome) {
      await brevoRequest(
        'POST',
        '/v3/smtp/email',
        {
          to: [{ email: email }],
          templateId: BREVO_WELCOME_TEMPLATE_ID,
        },
        apiKey
      )
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
