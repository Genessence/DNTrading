import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// Debug: Check what we're reading
console.log('EMAIL_HOST:', process.env.EMAIL_HOST);
console.log('EMAIL_PORT:', process.env.EMAIL_PORT);
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
console.log('EMAIL_PASS length:', process.env.EMAIL_PASS?.length || 0);

async function test() {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use service instead of host/port
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log('✅ Gmail connection verified successfully!');
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: 'Test email from DN Trading backend',
      text: 'This is a test email to verify SMTP credentials.',
    });

    console.log('✅ Mail sent successfully:', info.messageId);
  } catch (e) {
    console.error('❌ Error:', e.message);
    if (e.code === 'EAUTH') {
      console.error('\n🔍 Troubleshooting:');
      console.error('1. Make sure you\'re using a Gmail App Password (not your regular password)');
      console.error('2. Verify 2-Step Verification is enabled on your Google account');
      console.error('3. Generate a new App Password at: https://myaccount.google.com/apppasswords');
      console.error('4. Make sure there are no spaces or quotes in the password in .env file');
    }
  }
}

test();
