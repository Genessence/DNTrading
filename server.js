import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:4028,http://localhost:5173,http://localhost:3000').split(',');
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(null, false);
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Email transporter (Office 365)
function createTransport() {
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = typeof process.env.EMAIL_SECURE !== 'undefined'
    ? String(process.env.EMAIL_SECURE).toLowerCase() === 'true'
    : port === 465; // auto-use SSL for 465 (Gmail)

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.office365.com',
    port,
    secure,
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

function renderEmailHtml(fields) {
  const templatePath = path.join(__dirname, 'templates', 'emailTemplate.html');
  let tpl = '';
  try {
    tpl = fs.readFileSync(templatePath, 'utf8');
  } catch (e) {
    // fallback minimal template
    tpl = `<!doctype html><html><body><h2>New Contact Submission</h2>{{TABLE}}</body></html>`;
  }
  const table = buildHtmlTableFromObject(fields);
  return tpl.replace('{{TABLE}}', table);
}

app.post('/contact', async (req, res) => {
  try {
    const payload = { ...(req.body || {}) };

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({ ok: false, message: 'Email credentials not configured on server.' });
    }

    const transporter = createTransport();
    const to = process.env.EMAIL_RECEIVER || process.env.EMAIL_USER;

    const subject = `New Contact Submission from ${payload.contactPerson || payload.name || 'Website'}`;
    const html = renderEmailHtml(payload);
    const text = Object.entries(payload)
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
      .join('\n');

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
      text,
    });

    return res.json({ ok: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('[CONTACT_ERROR]', err);
    return res.status(500).json({ ok: false, message: 'Failed to send message.', error: err?.message });
  }
});

const PORT = Number(process.env.PORT || 5050);
app.listen(PORT, () => {
  console.log(`Contact backend listening on http://localhost:${PORT}`);
});


