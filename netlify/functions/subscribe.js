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
