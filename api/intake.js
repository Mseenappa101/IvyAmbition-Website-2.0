export default async function handler(req, res) {
  console.log('[IvyAmbition] Intake received');

  // Fire Airtable API call — await it so we can log the result, but always return 200
  if (req.method === 'POST' && req.body) {
    const { email, who_speaking_with, parent_name, student_name, location, who, grade, gpa, schools, timeline, financial_aid } = req.body;

    try {
      const airtableRes = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Consulting%20Leads`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: {
            'Lead Name': '',
            'Timestamp': new Date().toISOString().split('T')[0],
            'Email': email,
            'Who Speaking With': who_speaking_with,
            'Parent Name': parent_name || '',
            'Student Name': student_name || '',
            'Location': location,
            'Grade': grade,
            'GPA': gpa,
            'Target Schools': schools || '',
            'Timeline': timeline,
            'Financial Aid': financial_aid
          }
        })
      });

      const airtableBody = await airtableRes.text();
      console.log('[IvyAmbition] Airtable response status:', airtableRes.status);
      console.log('[IvyAmbition] Airtable response body:', airtableBody);
    } catch (err) {
      console.error('[IvyAmbition] Airtable API error:', err.message);
    }
  }

  return res.status(200).json({ success: true });
}
