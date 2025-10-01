DN Trading - Contact Backend (Office 365 SMTP)

Overview
This adds a minimal Node.js/Express backend and a Vercel serverless function to receive contact form submissions and send them to email via Office 365 (Outlook) SMTP.

Files
- server.js: Express server for local testing (POST /contact)
- api/contact.js: Vercel serverless function handler (same behavior)
- package.json: Scripts and dependencies
- templates/emailTemplate.html: HTML email template that renders submitted fields in a table
- test-mail.js: Simple script to verify SMTP credentials
- .env.example: Example env (use your values). If this file is missing, create it from the content below.

Environment Variables
Create a .env file (do not commit). Example:

EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_USER=admin@dntrading.co.in
EMAIL_PASS=your-strong-password-here
EMAIL_RECEIVER=mishravagish14@gmail.com
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
PORT=5000

Install & Run Locally
1) Install deps
   npm install

2) Create .env with the variables above

3) Optional: verify SMTP credentials
   npm run test-mail

4) Start local server
   npm start

5) Test endpoint (POST /contact)
   curl -X POST http://localhost:5000/contact \
     -H "Content-Type: application/json" \
     -d '{"companyName":"Acme","contactPerson":"John","email":"john@acme.com","phone":"+91 90000 00000","message":"Hello"}'

Frontend Integration (Vite + React)
Use import.meta.env.VITE_API_URL if present, otherwise default to localhost during development.

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

async function submitContact(formData) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok || !data.ok) throw new Error(data.message || 'Failed to submit');
  return data;
}

Switching Environments
- Local Dev: VITE_API_URL not set -> defaults to http://localhost:5000
- Production (Vercel): Set VITE_API_URL to your Vercel domain (e.g., https://your-app.vercel.app). For Vercel serverless function, you can call /api/contact directly from the same origin front-end.

Vercel Deployment
1) Push the project to a Git repo (already done for frontend)
2) Import into Vercel
3) Add Environment Variables in Vercel Project Settings → Environment Variables:
   - EMAIL_USER=admin@dntrading.co.in
   - EMAIL_PASS=your-strong-password-here
   - EMAIL_RECEIVER=mishravagish14@gmail.com
   - EMAIL_HOST=smtp.office365.com
   - EMAIL_PORT=587

4) Deploy
   The serverless function will be available at /api/contact

Office 365 (Outlook) SMTP Notes
- Host: smtp.office365.com, Port: 587, secure: false (STARTTLS).
- SMTP AUTH must be enabled on the mailbox/tenant. See Microsoft docs: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online
- If SMTP AUTH is disabled or your tenant requires Modern Auth (OAuth2), basic auth will fail.

Troubleshooting
- 535/5.7.3 Authentication failed: Check EMAIL_USER/EMAIL_PASS and if SMTP AUTH is enabled.
- ETIMEDOUT/ECONNRESET: Corporate networks may block outbound 587.
- TLS errors: Ensure secure: false with STARTTLS is used; Office 365 upgrades connection.
- If basic auth is disabled, use Microsoft Graph (OAuth2) instead of SMTP.

Migrating to Microsoft Graph (OAuth2) - Brief
- Register an Azure AD app, grant Mail.Send permissions.
- Obtain OAuth2 access token via client credentials or delegated flow.
- Use Graph endpoint: POST https://graph.microsoft.com/v1.0/users/{sender}/sendMail with MIME content.
- Libraries: @microsoft/microsoft-graph-client.

Email Template
The backend loads templates/emailTemplate.html and replaces {{TABLE}} with a generated table of all submitted fields.

# React

A modern React-based project utilizing the latest frontend technologies and tools for building responsive web applications.

## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations
- **Testing** - Jest and React Testing Library setup

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
react_app/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 📦 Deployment

Build the application for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ on Rocket.new
