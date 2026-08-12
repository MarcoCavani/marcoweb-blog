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

  // Intent captured at signup, mapped to a clean stored value so the list can be
  // segmented later (send the CISA funnel only to CISA-intent people, etc.).
  var GOALS = { cisa: 'CISA', cert: 'Other ISACA cert', reports: 'Reports only' }
  var goal = GOALS[String(body.goal || '').toLowerCase()] || ''

  var apiKey = process.env.BREVO_API_KEY
  var listId = parseInt(process.env.BREVO_LIST_ID || '2', 10)
  var doiTemplateId = parseInt(process.env.BREVO_DOI_TEMPLATE_ID || '0', 10)
  var siteUrl = (process.env.SITE_URL || 'https://marcoweb.org').replace(/\/+$/, '')

  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured' }) }
  }

  try {
    // Preferred path: double opt-in. Brevo emails a confirmation link and only
    // adds the contact to the list once they click it, so bots that never open
    // mail never land on the list and the count stays honest. Turns on the
    // moment BREVO_DOI_TEMPLATE_ID is set.
    if (doiTemplateId) {
      var doiPayload = {
        email: email,
        includeListIds: [listId],
        templateId: doiTemplateId,
        redirectionUrl: siteUrl + '/newsletter/confirmed/',
      }
      if (goal) doiPayload.attributes = { GOAL: goal }

      var doi = await brevoRequest('POST', '/v3/contacts/doubleOptinConfirmation', doiPayload, apiKey)

      if (doi.status === 201 || doi.status === 204) {
        return { statusCode: 200, body: JSON.stringify({ success: true, pending: true }) }
      }
      var dparsed = {}
      try { dparsed = JSON.parse(doi.body) } catch (e) {}
      // Already a confirmed contact: nothing to send, report success quietly.
      if (dparsed.code === 'duplicate_parameter') {
        return { statusCode: 200, body: JSON.stringify({ success: true, pending: false }) }
      }
      return { statusCode: 500, body: JSON.stringify({ error: 'Brevo error', detail: doi.body }) }
    }

    // Fallback (no DOI template configured yet): single opt-in, but still store
    // the GOAL attribute so intent is captured from day one.
    var contactPayload = { email: email, listIds: [listId], updateEnabled: true }
    if (goal) contactPayload.attributes = { GOAL: goal }
    var result = await brevoRequest('POST', '/v3/contacts', contactPayload, apiKey)

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
        { to: [{ email: email }], templateId: BREVO_WELCOME_TEMPLATE_ID },
        apiKey
      )
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
