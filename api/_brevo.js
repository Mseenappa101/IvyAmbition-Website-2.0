// ============================================================
// FILE: api/_brevo.js
// PURPOSE: Shared Brevo API helper functions
// CONNECTS TO: Brevo API (https://api.brevo.com/v3)
// ENV VARS USED: BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME
// ============================================================

// ── CONFIGURATION ──────────────────────────────────────────
// Edit these values if your Brevo setup changes
const BREVO_BASE_URL = 'https://api.brevo.com/v3';

const LIST_IDS = {
  undergraduate: parseInt(process.env.BREVO_LIST_UNDERGRADUATE),
  'law-school':  parseInt(process.env.BREVO_LIST_LAWSCHOOL),
  transfer:      parseInt(process.env.BREVO_LIST_TRANSFER),
};
// ── END CONFIGURATION ───────────────────────────────────────


// Adds or updates a contact in Brevo and assigns them to the correct list
export async function addContactToBrevo({ email, firstName, vertical, extraAttributes = {} }) {
  const listId = LIST_IDS[vertical];
  if (!listId) throw new Error(`Unknown vertical: ${vertical}`);

  const res = await fetch(`${BREVO_BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: firstName,
        VERTICAL: vertical,
        SIGNUP_DATE: new Date().toISOString(),
        ...extraAttributes,
      },
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error('[Brevo] addContact error:', err);
    throw new Error('Failed to add contact to Brevo');
  }

  return res.json().catch(() => ({ success: true }));
}


// Updates an existing contact's attributes in Brevo (used after intake form)
export async function updateContactInBrevo({ email, attributes }) {
  const encodedEmail = encodeURIComponent(email);

  const res = await fetch(`${BREVO_BASE_URL}/contacts/${encodedEmail}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({ attributes }),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error('[Brevo] updateContact error:', err);
    throw new Error('Failed to update contact in Brevo');
  }

  return { success: true };
}


// Sends a transactional email via Brevo
export async function sendBrevoEmail({ toEmail, toName, subject, htmlContent }) {
  const res = await fetch(`${BREVO_BASE_URL}/smtp/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        email: process.env.BREVO_SENDER_EMAIL,
        name: process.env.BREVO_SENDER_NAME,
      },
      to: [{ email: toEmail, name: toName }],
      subject,
      htmlContent,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error('[Brevo] sendEmail error:', err);
    throw new Error('Failed to send email via Brevo');
  }

  return res.json();
}
