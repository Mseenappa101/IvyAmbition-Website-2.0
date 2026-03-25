// ============================================================
// FILE: api/intake.js
// PURPOSE: Handles intake form submission after Calendly booking
// FLOW: Receive form answers → update Brevo contact with answers → send Email #2
// ENV VARS USED: BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME
// ============================================================

import { updateContactInBrevo, sendBrevoEmail } from './_brevo.js';
import { getEmail2 } from './_emails.js';

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, name, vertical, answers } = req.body;

  // Validate required fields
  if (!email || !name || !vertical || !answers) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const firstName = name.split(' ')[0];

  // ── BREVO ATTRIBUTE MAPPING ──────────────────────────────
  // These map intake form answers to Brevo contact attributes
  // To add a new field: add it to the answers object on the frontend
  // and add the mapping here
  const brevoAttributes = {
    INTAKE_SUBMITTED_DATE: new Date().toISOString(),
    INTAKE_VERTICAL: vertical,
    ...Object.fromEntries(
      Object.entries(answers).map(([key, value]) => [
        `INTAKE_${key.toUpperCase().replace(/\s+/g, '_')}`,
        value,
      ])
    ),
  };
  // ── END ATTRIBUTE MAPPING ────────────────────────────────

  try {
    // Step 1: Update the contact in Brevo with intake form answers
    await updateContactInBrevo({ email, attributes: brevoAttributes });

    // Step 2: Send Email #2 — confirmation + prep instructions
    const { subject, html } = getEmail2({ firstName, vertical });
    await sendBrevoEmail({ toEmail: email, toName: firstName, subject, htmlContent: html });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('[intake] Error:', error.message);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
