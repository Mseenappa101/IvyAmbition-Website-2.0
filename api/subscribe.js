export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const response = await fetch(
      'https://api.convertkit.com/v3/forms/9201664/subscribe',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.KIT_API_KEY,
          email: email
        })
      }
    );

    const data = await response.json();

    if (data.subscription) {
      return res.status(200).json({ success: true, subscription: data.subscription });
    } else {
      console.error('Kit API error:', data);
      return res.status(400).json({ success: false, error: data });
    }
  } catch (err) {
    console.error('Kit API network error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
