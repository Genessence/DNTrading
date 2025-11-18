import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

async function main() {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS in env');
      process.exit(1);
    }

    // Use Gmail service if EMAIL_HOST is gmail, otherwise use manual config
    let transporter;
    if (process.env.EMAIL_HOST === 'smtp.gmail.com') {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });
    } else {
      const port = Number(process.env.EMAIL_PORT || 587);
      const secure = typeof process.env.EMAIL_SECURE !== 'undefined'
        ? String(process.env.EMAIL_SECURE).toLowerCase() === 'true'
        : port === 465;

      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.office365.com',
        port,
        secure,
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });
    }

    const to = process.env.EMAIL_RECEIVER || process.env.EMAIL_USER;
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: 'Test email from DN Trading backend',
      text: 'This is a test email to verify SMTP credentials.',
    });

    console.log('Mail sent:', info.messageId || info);
    process.exit(0);
  } catch (e) {
    console.error('Failed to send test email:', e);
    process.exit(1);
  }
}

main();


