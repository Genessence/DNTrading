import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

async function main() {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS in env');
      process.exit(1);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.office365.com',
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const to = process.env.EMAIL_RECEIVER || process.env.EMAIL_USER;
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: 'Test email from DN Trading backend',
      text: 'This is a test email to verify Office365 SMTP credentials.',
    });

    console.log('Mail sent:', info.messageId || info);
    process.exit(0);
  } catch (e) {
    console.error('Failed to send test email:', e);
    process.exit(1);
  }
}

main();


