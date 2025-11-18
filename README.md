# DN Trading - Industrial Packaging Solutions

A modern full-stack web application for DN Trading, featuring a React frontend and Node.js/Express backend.

## 📁 Project Structure

```
DNTrading/
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   ├── index.html    # HTML template
│   └── package.json  # Frontend dependencies
├── backend/          # Node.js backend API
│   ├── server.js     # Express server
│   ├── api/          # API routes
│   ├── templates/    # Email templates
│   └── package.json  # Backend dependencies
└── package.json      # Root workspace configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```
   Or install separately:
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend && npm install
   
   # Install backend dependencies
   cd ../backend && npm install
   ```

### Running the Application

**Frontend (Development):**
```bash
npm run frontend:start
# or
cd frontend && npm start
```
Frontend runs on `http://localhost:4028`

**Backend (Development):**
```bash
npm run backend:start
# or
cd backend && npm start
```
Backend runs on `http://localhost:5050`

**Backend (Development with NODE_ENV):**
```bash
npm run backend:dev
```

## 🔧 Environment Variables

### Backend (.env in backend/ directory)
Create a `.env` file in the `backend/` directory:

```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_USER=admin@dntrading.co.in
EMAIL_PASS=your-strong-password-here
EMAIL_RECEIVER=mishravagish14@gmail.com
ALLOWED_ORIGINS=http://localhost:4028,http://localhost:5173,http://localhost:3000
PORT=5050
```

### Frontend (.env in frontend/ directory)
For production, create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5050
```

## 📦 Available Scripts

### Root Level
- `npm run frontend:start` - Start frontend development server
- `npm run frontend:build` - Build frontend for production
- `npm run frontend:serve` - Preview production build
- `npm run backend:start` - Start backend server
- `npm run backend:dev` - Start backend in development mode
- `npm run backend:test-mail` - Test email configuration
- `npm run install:all` - Install all dependencies

### Frontend (in frontend/ directory)
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build

### Backend (in backend/ directory)
- `npm start` - Start server
- `npm run dev` - Start in development mode
- `npm run test-mail` - Test email configuration

## 🧪 Testing Email Configuration

To verify your email SMTP settings:

```bash
cd backend
npm run test-mail
```

## 🏗️ Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```
Output will be in `frontend/build/` directory.

## 📧 Contact Form Backend

The backend provides a `/contact` endpoint that:
- Receives contact form submissions
- Sends emails via Office 365 SMTP
- Uses HTML email templates from `backend/templates/`

### API Endpoint

**POST** `/contact`

Request body:
```json
{
  "companyName": "Acme Corp",
  "contactPerson": "John Doe",
  "email": "john@acme.com",
  "phone": "+91 90000 00000",
  "message": "Hello, I'm interested in your products"
}
```

Response:
```json
{
  "ok": true,
  "message": "Message sent successfully."
}
```

## 🚢 Deployment

### Frontend (Vercel)
The `frontend/vercel.json` is configured for Vercel deployment. The frontend can be deployed independently.

### Backend
The backend can be deployed to:
- Heroku
- Railway
- DigitalOcean
- AWS EC2
- Any Node.js hosting service

Make sure to set all environment variables in your hosting platform.

## 🛠️ Technologies

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router v6
- Redux Toolkit
- Framer Motion

### Backend
- Node.js
- Express
- Nodemailer
- CORS
- Helmet

## 📝 Notes

- The frontend currently uses a hardcoded API URL (`http://localhost:5050`) in development. For production, use environment variables.
- SMTP authentication must be enabled on your Office 365 tenant for email functionality to work.
- CORS is configured to allow requests from the frontend development server.

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ on Rocket.new
