// ============================================================
// FILE: api/_emails.js
// PURPOSE: All email HTML templates for IvyAmbition
// HOW TO EDIT: Find the template by name, edit the copy between
//              the COPY START and COPY END comments
// ============================================================


// ── SHARED STYLES ───────────────────────────────────────────
// Edit these to change the look of all emails at once
const emailWrapper = (content) => `
  <div style="font-family:'Georgia',serif;max-width:600px;margin:0 auto;padding:40px 24px;background:#0d1b2a;color:#ffffff;">

    <!-- LOGO -->
    <div style="text-align:center;margin-bottom:36px;">
      <span style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#ffffff;">
        Ivy<span style="color:#c9a84c;">Ambition</span>
      </span>
    </div>

    <!-- CONTENT -->
    ${content}

    <!-- FOOTER -->
    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:36px 0;" />
    <p style="font-size:12px;color:rgba(255,255,255,0.25);text-align:center;line-height:1.7;">
      IvyAmbition · Elite Admissions Consulting<br/>
      Questions? Reply to this email anytime.
    </p>

  </div>
`;

const goldButton = (url, text) => `
  <div style="text-align:center;margin:32px 0;">
    <a href="${url}" style="background:#c9a84c;color:#060d17;font-size:16px;font-weight:700;padding:16px 40px;border-radius:8px;text-decoration:none;display:inline-block;">
      ${text}
    </a>
  </div>
`;
// ── END SHARED STYLES ────────────────────────────────────────


// ============================================================
// EMAIL #1 — SENT AFTER EMAIL IS SUBMITTED ON LANDING PAGE
// Triggered by: api/subscribe.js
// ============================================================

export function getEmail1({ firstName, vertical }) {

  // ── COPY START — Edit subject line and body copy here ──

  const subjects = {
    undergraduate: "You're in — here's how to book your free strategy call",
    'law-school':  "You're in — here's how to book your free strategy call",
    transfer:      "You're in — here's how to book your free strategy call",
  };

  const headlines = {
    undergraduate: `Hi ${firstName} — you're one step away.`,
    'law-school':  `Hi ${firstName} — you're one step away.`,
    transfer:      `Hi ${firstName} — you're one step away.`,
  };

  const intros = {
    undergraduate: `Thank you for reaching out. We work with a small number of families each cycle so every student gets our full attention — and we're looking forward to learning about your child's goals.`,
    'law-school':  `Thank you for reaching out. We keep our roster intentionally small so every applicant gets real, focused attention — and we're looking forward to learning about your application.`,
    transfer:      `Thank you for reaching out. I transferred into Columbia Law from Brooklyn Law after finishing in the top 5% of my 1L class — and I built IvyAmbition specifically for 1Ls who know they're capable of more than where they landed.`,
  };

  const body2 = {
    undergraduate: `Your next step is to book your free 30-minute strategy call. No obligation, no pitch. We'll come prepared with a real plan built around your child's specific profile.`,
    'law-school':  `Your next step is to book your free 30-minute strategy call. No obligation, no pitch. We'll come prepared with a specific plan built around your numbers and your target schools.`,
    transfer:      `Your next step is to book your free 30-minute strategy call. No pitch, no obligation. We'll talk through your 1L situation and tell you exactly what a successful transfer would take.`,
  };

  const bookingUrls = {
    undergraduate: 'https://ivyambition.com/tabs/undergraduate/landing-pages/v1.html#book',
    'law-school':  'https://ivyambition.com/tabs/law-school/landing-pages/v1.html#book',
    transfer:      'https://ivyambition.com/tabs/transfer/landing-pages/v1.html#book',
  };

  const footerNotes = {
    undergraduate: `On the call we'll review your child's profile and tell you exactly how we'd approach their application. If it's not the right fit, we'll say so.`,
    'law-school':  `On the call we'll review your LSAT, GPA, and targets and tell you exactly how we'd position your application. If it's not the right fit, we'll say so.`,
    transfer:      `On the call we'll review your GPA, your current school, and your targets and tell you exactly what your transfer path looks like. If it's not the right fit, we'll say so.`,
  };

  // ── COPY END ──

  const subject = subjects[vertical];
  const html = emailWrapper(`
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#ffffff;margin-bottom:16px;line-height:1.3;">
      ${headlines[vertical]}
    </h1>
    <p style="font-size:15px;color:rgba(255,255,255,0.7);line-height:1.8;margin-bottom:16px;">${intros[vertical]}</p>
    <p style="font-size:15px;color:rgba(255,255,255,0.7);line-height:1.8;margin-bottom:8px;">${body2[vertical]}</p>
    ${goldButton(bookingUrls[vertical], 'Book Your Free Strategy Call →')}
    <p style="font-size:13px;color:rgba(255,255,255,0.4);line-height:1.7;">${footerNotes[vertical]}</p>
  `);

  return { subject, html };
}


// ============================================================
// EMAIL #2 — SENT AFTER INTAKE FORM IS SUBMITTED
// Triggered by: api/intake.js
// ============================================================

export function getEmail2({ firstName, vertical }) {

  // ── COPY START — Edit subject line and body copy here ──

  const subjects = {
    undergraduate: "Got it — we'll see you on the call",
    'law-school':  "Got it — we'll see you on the call",
    transfer:      "Got it — we'll see you on the call",
  };

  const headlines = {
    undergraduate: `${firstName}, we've got everything we need.`,
    'law-school':  `${firstName}, we've got everything we need.`,
    transfer:      `${firstName}, we've got everything we need.`,
  };

  const body1 = {
    undergraduate: `We've received your intake form and we're ready for your call. We've already reviewed your answers and we'll come prepared with a strategy built specifically around your child's profile — no generic advice, no wasted time.`,
    'law-school':  `We've received your intake form and we're ready for your call. We've already reviewed your answers and we'll come prepared with a strategy built specifically around your profile — no generic advice, no wasted time.`,
    transfer:      `We've received your intake form and we're ready for your call. We've already reviewed your answers and we'll come to the call with a specific transfer plan built around your exact situation.`,
  };

  const prepItems = {
    undergraduate: [
      "Your child's current GPA and any test scores",
      "A rough list of their top 3–5 dream schools",
      "Their biggest question or concern about the process",
    ],
    'law-school': [
      "Your LSAT score(s) and undergraduate GPA",
      "Your top 3 target schools and why",
      "The one thing about your application you're most uncertain about",
    ],
    transfer: [
      "Your current 1L GPA and class rank if available",
      "The 2–3 schools you most want to transfer into",
      "Your single biggest question about the transfer process",
    ],
  };

  // ── COPY END ──

  const subject = subjects[vertical];
  const prepList = prepItems[vertical].map(item => `
    <li style="font-size:14px;color:rgba(255,255,255,0.65);line-height:1.8;margin-bottom:8px;">→ ${item}</li>
  `).join('');

  const html = emailWrapper(`
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#ffffff;margin-bottom:16px;line-height:1.3;">
      ${headlines[vertical]}
    </h1>
    <p style="font-size:15px;color:rgba(255,255,255,0.7);line-height:1.8;margin-bottom:24px;">${body1[vertical]}</p>
    <div style="background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);border-radius:12px;padding:24px 28px;margin-bottom:24px;">
      <p style="font-size:14px;font-weight:600;color:rgba(255,255,255,0.8);margin-bottom:14px;">To get the most out of your call, come ready with:</p>
      <ul style="list-style:none;padding:0;margin:0;">
        ${prepList}
      </ul>
    </div>
    <p style="font-size:13px;color:rgba(255,255,255,0.4);line-height:1.7;">Check your calendar for the Calendly confirmation — that has your call link. If anything comes up, you can reschedule directly from that email.</p>
  `);

  return { subject, html };
}
