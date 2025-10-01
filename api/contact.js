import nodemailer from 'nodemailer';

function createTransport() {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.office365.com',
    port: Number(process.env.EMAIL_PORT || 587),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  return transporter;
}

function buildHtmlTableFromObject(obj) {
  const rows = Object.entries(obj || {})
    .map(([key, val]) => {
      const safeKey = String(key);
      const safeVal = Array.isArray(val) ? val.join(', ') : val ?? '';
      return `<tr>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;text-transform:capitalize;">${safeKey}</td>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;">${String(safeVal)}</td>
      </tr>`;
    })
    .join('');

  return `<table style="width:100%;border-collapse:collapse;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;">
    <thead>
      <tr>
        <th style="text-align:left;padding:10px 12px;border:1px solid #e5e7eb;background:#111827;color:#fff;">Field</th>
        <th style="text-align:left;padding:10px 12px;border:1px solid #e5e7eb;background:#111827;color:#fff;">Value</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }
  try {
    const payload = req.body || {};
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({ ok: false, message: 'Email credentials not configured on server.' });
    }
    const transporter = createTransport();
    const to = process.env.EMAIL_RECEIVER || process.env.EMAIL_USER;
    const subject = `New Contact Submission from ${payload.contactPerson || payload.name || 'Website'}`;
    const html = `<!doctype html><html><body><h2>New Contact Submission</h2>${buildHtmlTableFromObject(payload)}</body></html>`;
    const text = Object.entries(payload)
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
      .join('\n');

    await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, html, text });
    return res.json({ ok: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('[VERCEL_CONTACT_ERROR]', err);
    return res.status(500).json({ ok: false, message: 'Failed to send message.', error: err?.message });
  }
}


