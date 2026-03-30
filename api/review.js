import { sendBrevoEmail } from './_brevo.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, vertical, rating, review } = req.body;
  if (!name || !vertical || !rating || !review) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  try {
    await sendBrevoEmail({
      toEmail: process.env.BREVO_SENDER_EMAIL,
      toName: 'IvyAmbition Team',
      subject: `New Review Submitted (${vertical}) — ${stars}`,
      htmlContent: `
        <h2>New Review Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Vertical:</strong> ${vertical}</p>
        <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
        <hr />
        <p style="font-style:italic;font-size:16px;line-height:1.8;">"${review}"</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('[review] Error:', error.message);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}
