// ============================================================
// FILE: api/subscribe.js
// PURPOSE: Handles email gate form submission on landing pages
// FLOW: Receive email + name + vertical → add to Brevo list → send Email #1
// ENV VARS USED: BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME,
//                BREVO_LIST_UNDERGRADUATE, BREVO_LIST_LAWSCHOOL, BREVO_LIST_TRANSFER
// ============================================================

import { addContactToBrevo, sendBrevoEmail } from './_brevo.js';
import { getEmail1 } from './_emails.js';

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, name, vertical } = req.body;

  // Validate required fields
  if (!email || !name || !vertical) {
    return res.status(400).json({ error: 'Missing required fields: email, name, vertical' });
  }

  const firstName = name.split(' ')[0];

  try {
    // Step 1: Add contact to the correct Brevo list
    await addContactToBrevo({ email, firstName, vertical });

    // Step 2: Send Email #1 to the new subscriber
    const { subject, html } = getEmail1({ firstName, vertical });
    await sendBrevoEmail({ toEmail: email, toName: firstName, subject, htmlContent: html });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('[subscribe] Error:', error.message);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
