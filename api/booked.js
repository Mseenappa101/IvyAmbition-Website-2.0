// ============================================================
// FILE: api/booked.js
// PURPOSE: Fires Email #2 after user confirms they have booked
//          their Calendly call. Called when user clicks
//          "I've Booked My Call — Continue" button.
// FLOW: Receive email + name + vertical → send Email #2
// ENV VARS USED: BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME
// ============================================================

import { sendBrevoEmail } from './_brevo.js';
import { getEmail2 } from './_emails.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, name, vertical } = req.body;

  if (!email || !name || !vertical) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const firstName = name.split(' ')[0];

  try {
    // Send Email #2 — call confirmed + prep instructions
    const { subject, html } = getEmail2({ firstName, vertical });
    await sendBrevoEmail({ toEmail: email, toName: firstName, subject, htmlContent: html });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('[booked] Error:', error.message);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}
