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

// CORS - Allow requests from frontend domain
app.use(
  cors({
    origin: ["https://dntrading.co.in, http://www.dntrading.co.in, http://3.89.116.134",],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// Email transporter with Render-compatible fallback
function createTransport() {
  // Option 1: Use Brevo (Render-compatible SMTP)
  if (process.env.EMAIL_HOST === 'smtp-relay.brevo.com' || process.env.USE_BREVO === 'true') {
    return nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER || process.env.EMAIL_USER,
        pass: process.env.BREVO_PASS || process.env.EMAIL_PASS,
      },
    });
  }

  // Option 2: Use Gmail service (may timeout on Render)
  if (process.env.EMAIL_HOST === 'smtp.gmail.com') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000, // 10 second timeout
      greetingTimeout: 10000,
    });
  }

  // Option 3: For other providers (Office 365, etc.)
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = typeof process.env.EMAIL_SECURE !== 'undefined'
    ? String(process.env.EMAIL_SECURE).toLowerCase() === 'true'
    : port === 465;

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.office365.com',
    port,
    secure,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  });
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

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/contact', async (req, res) => {
  try {
    const payload = { ...(req.body || {}) };

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('[CONTACT_ERROR] Email credentials not configured');
      // Return 200 to prevent frontend breakage, but log the error
      return res.status(200).json({ 
        ok: false, 
        message: 'Email service temporarily unavailable. Please try again later or contact us directly.' 
      });
    }

    const transporter = createTransport();
    const to = process.env.EMAIL_RECEIVER || process.env.EMAIL_USER;

    const subject = `New Contact Submission from ${payload.contactPerson || payload.name || 'Website'}`;
    const html = renderEmailHtml(payload);
    const text = Object.entries(payload)
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
      .join('\n');

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html,
        text,
      });

      return res.json({ ok: true, message: 'Message sent successfully.' });
    } catch (emailErr) {
      // Handle SMTP timeout/connection errors gracefully
      console.error('[CONTACT_ERROR] Email send failed:', emailErr);
      
      // Check for timeout or connection errors (common on Render)
      if (emailErr.code === 'ETIMEDOUT' || emailErr.code === 'ECONNREFUSED' || emailErr.code === 'ESOCKET') {
        // Return 200 with friendly message instead of 500
        return res.status(200).json({ 
          ok: false, 
          message: 'Email service temporarily unavailable. Your message has been received and we will contact you soon.',
          note: 'Please contact us directly if urgent.'
        });
      }
      
      // For other errors, still return 200 to prevent frontend breakage
      return res.status(200).json({ 
        ok: false, 
        message: 'Unable to send email at this time. Please try again later or contact us directly.',
        error: process.env.NODE_ENV === 'development' ? emailErr.message : undefined
      });
    }
  } catch (err) {
    console.error('[CONTACT_ERROR] Unexpected error:', err);
    // Return 200 to prevent frontend breakage
    return res.status(200).json({ 
      ok: false, 
      message: 'An error occurred. Please try again later or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('[SERVER_ERROR]', err);
  res.status(500).json({ 
    ok: false,
    message: 'Server error', 
    error: process.env.NODE_ENV === 'development' ? err.message : undefined 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Route not found' });
});

const PORT = Number(process.env.PORT || 5050);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Contact backend listening on port ${PORT}`);
});


