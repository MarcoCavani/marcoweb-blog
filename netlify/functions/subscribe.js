const https = require('https')

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let email
  try {
    ;({ email } = JSON.parse(event.body))
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) }
  }

  if (!email || !email.includes('@')) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid email required' }) }
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = parseInt(process.env.BREVO_LIST_ID || '2', 10)

  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured' }) }
  }

  const payload = JSON.stringify({ email, listIds: [listId], updateEnabled: true })

  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: 'api.brevo.com',
        path: '/v3/contacts',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
          'api-key': apiKey,
        },
      },
      (res) => {
        let data = ''
        res.on('data', (chunk) => (data += chunk))
        res.on('end', () => {
          if (res.statusCode === 201 || res.statusCode === 204) {
            return resolve({ statusCode: 200, body: JSON.stringify({ success: true }) })
          }
          try {
            const parsed = JSON.parse(data)
            if (parsed.code === 'duplicate_parameter') {
              return resolve({ statusCode: 200, body: JSON.stringify({ success: true }) })
            }
          } catch {}
          resolve({ statusCode: 500, body: JSON.stringify({ error: 'Subscription failed' }) })
        })
      }
    )
    req.on('error', () =>
      resolve({ statusCode: 500, body: JSON.stringify({ error: 'Network error' }) })
    )
    req.write(payload)
    req.end()
  })
}
