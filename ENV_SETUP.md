# Environment Variables Setup Guide

This guide will help you create the necessary `.env` files for both frontend and backend.

## 📋 Required Environment Variables

### Backend Environment Variables

Create a file named `.env` in the `backend/` directory with the following variables:

#### Required Variables:

1. **EMAIL_HOST** - SMTP server hostname
   - Default: `smtp.office365.com`
   - For Office 365/Outlook: `smtp.office365.com`
   - For Gmail: `smtp.gmail.com`
   - For other providers: Check your email provider's SMTP settings

2. **EMAIL_PORT** - SMTP server port
   - Default: `587` (STARTTLS)
   - For Office 365: `587`
   - For Gmail: `587` or `465` (SSL)
   - Port 465 requires `EMAIL_SECURE=true`

3. **EMAIL_USER** - Your email address (sender)
   - Example: `asha.srp1@gmail.com`
   - This is the email account that will send the contact form emails
   - Must have SMTP authentication enabled

4. **EMAIL_PASS** - Your email account password
   - ⚠️ **IMPORTANT**: Use a strong password
   - For Office 365: Your account password (or app-specific password if MFA is enabled)
   - For Gmail: Use an App Password (not your regular password if 2FA is enabled)

5. **EMAIL_RECEIVER** - Email address to receive contact form submissions
   - Example: `admin@dntrading.co.in`
   - If not set, defaults to `EMAIL_USER`

#### Optional Variables:

6. **PORT** - Backend server port
   - Default: `5050`
   - Example: `PORT=5050`

7. **ALLOWED_ORIGINS** - Comma-separated list of allowed frontend origins
   - Default: `http://localhost:4028,http://localhost:5173,http://localhost:3000`
   - Add your production frontend URL when deploying
   - Example: `ALLOWED_ORIGINS=http://localhost:4028,https://yourdomain.com`

8. **EMAIL_SECURE** - Use SSL/TLS
   - Default: `false` (uses STARTTLS on port 587)
   - Set to `true` for port 465 (Gmail SSL)
   - Example: `EMAIL_SECURE=true`

### Frontend Environment Variables

Create a file named `.env` in the `frontend/` directory with the following variables:

#### Optional Variables:

1. **VITE_API_URL** - Backend API URL
   - Default: `http://localhost:5050` (hardcoded in code if not set)
   - For local development: `http://localhost:5050`
   - For production: Your deployed backend URL
   - Example: `VITE_API_URL=https://api.yourdomain.com`

## 🚀 Quick Setup

### Step 1: Backend .env File

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Copy the example file:
   ```bash
   cp .env.example .env
   ```

3. Edit `.env` and fill in your values:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=asha.srp1@gmail.com
   EMAIL_PASS=your-gmail-app-password
   EMAIL_RECEIVER=admin@dntrading.co.in
   EMAIL_SECURE=false
   PORT=5050
   ALLOWED_ORIGINS=http://localhost:4028,http://localhost:5173,http://localhost:3000
   ```

### Step 2: Frontend .env File (Optional)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Copy the example file:
   ```bash
   cp .env.example .env
   ```

3. Edit `.env` if you need to change the API URL:
   ```env
   VITE_API_URL=http://localhost:5050
   ```

## 📧 Email Provider Specific Instructions

### Office 365 / Outlook

1. **Enable SMTP AUTH**:
   - Go to Microsoft 365 Admin Center
   - Navigate to Settings → Mail → POP and IMAP
   - Enable "Authenticated SMTP"

2. **Use your regular credentials**:
   ```env
   EMAIL_HOST=smtp.office365.com
   EMAIL_PORT=587
   EMAIL_USER=admin@dntrading.co.in
   EMAIL_PASS=your-account-password
   EMAIL_SECURE=false
   ```

### Gmail

1. **Enable 2-Step Verification** (if not already enabled)

2. **Generate an App Password**:
   - Go to Google Account → Security → 2-Step Verification
   - Click "App passwords"
   - Generate a password for "Mail"

3. **Use the app password**:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=asha.srp1@gmail.com
   EMAIL_PASS=your-gmail-app-password
   EMAIL_RECEIVER=admin@dntrading.co.in
   EMAIL_SECURE=false
   PORT=5050
   ALLOWED_ORIGINS=http://localhost:4028,http://localhost:5173,http://localhost:3000
   ```

   Or use SSL (port 465):
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=465
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password-here
   EMAIL_SECURE=true
   ```

## 🧪 Testing Your Configuration

After setting up your `.env` file, test the email configuration:

```bash
cd backend
npm run test-mail
```

This will send a test email to verify your SMTP settings are correct.

## 🔒 Security Notes

1. **Never commit `.env` files to Git**
   - The `.gitignore` file already excludes `.env` files
   - Keep your passwords secure

2. **Use strong passwords**
   - Especially for production environments

3. **Use App Passwords for Gmail**
   - Don't use your main account password
   - Generate app-specific passwords

4. **For Production**:
   - Use environment variables provided by your hosting platform
   - Never hardcode credentials in your code
   - Use secrets management services if available

## 🐛 Troubleshooting

### Common Issues:

1. **"Authentication unsuccessful"**
   - Check if SMTP AUTH is enabled for your email account
   - Verify your email and password are correct
   - For Office 365, check tenant security policies

2. **"Connection refused"**
   - Check if the port is correct (587 for STARTTLS, 465 for SSL)
   - Verify firewall settings allow outbound connections

3. **"Failed to fetch" in frontend**
   - Ensure backend server is running
   - Check if `VITE_API_URL` matches your backend URL
   - Verify CORS settings in `ALLOWED_ORIGINS`

## 📝 Example .env Files

### Backend `.env` (Gmail - Current Configuration):
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=asha.srp1@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=admin@dntrading.co.in
EMAIL_SECURE=false
PORT=5050
ALLOWED_ORIGINS=http://localhost:4028,http://localhost:5173,http://localhost:3000
```

### Backend `.env` (Office 365 - Alternative):
```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_USER=admin@dntrading.co.in
EMAIL_PASS=YourSecurePassword123!
EMAIL_RECEIVER=mishravagish14@gmail.com
PORT=5050
ALLOWED_ORIGINS=http://localhost:4028,http://localhost:5173,https://dntrading.co.in
```

### Frontend `.env` (Development):
```env
VITE_API_URL=http://localhost:5050
```

### Frontend `.env` (Production):
```env
VITE_API_URL=https://api.dntrading.co.in
```

