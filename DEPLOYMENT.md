# Deployment Guide

This guide will help you deploy the DN Trading application:
- **Backend**: Render
- **Frontend**: Vercel

## 🚀 Backend Deployment (Render)

### Step 1: Prepare for Render

1. **Create a Render account** at https://render.com

2. **Connect your GitHub repository** to Render

### Step 2: Create a Web Service on Render

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: `dn-trading-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 3: Set Environment Variables on Render

Go to your Render service → **Environment** tab and add:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=asha.srp1@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=admin@dntrading.co.in
EMAIL_SECURE=false
ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app,https://yourdomain.com
```

**Important**: 
- Replace `your-gmail-app-password` with your actual Gmail App Password
- Update `ALLOWED_ORIGINS` with your actual frontend URL(s) after deploying to Vercel

### Step 4: Deploy

1. Click **"Create Web Service"**
2. Render will automatically build and deploy your backend
3. Note your backend URL (e.g., `https://dn-trading-backend.onrender.com`)

## 🎨 Frontend Deployment (Vercel)

### Step 1: Prepare for Vercel

1. **Create a Vercel account** at https://vercel.com
2. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

### Step 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. **Import your GitHub repository**
3. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

### Step 3: Set Environment Variables on Vercel

Go to **Settings** → **Environment Variables** and add:

```
VITE_API_URL=https://your-backend-url.onrender.com
```

**Important**: Replace `https://your-backend-url.onrender.com` with your actual Render backend URL

### Step 4: Deploy

1. Click **"Deploy"**
2. Vercel will build and deploy your frontend
3. Your site will be available at `https://your-project.vercel.app`

### Alternative: Deploy via CLI

```bash
cd frontend
vercel
```

Follow the prompts and set environment variables when asked.

## 🔄 Update Backend CORS After Frontend Deployment

After deploying your frontend, update the `ALLOWED_ORIGINS` environment variable in Render:

1. Go to your Render service → **Environment** tab
2. Update `ALLOWED_ORIGINS`:
   ```
   ALLOWED_ORIGINS=https://your-frontend.vercel.app,https://yourdomain.com
   ```
3. Save and redeploy

## 📝 Environment Variables Summary

### Render (Backend)
- `EMAIL_HOST` - SMTP host (smtp.gmail.com)
- `EMAIL_PORT` - SMTP port (587)
- `EMAIL_USER` - Sender email
- `EMAIL_PASS` - Gmail App Password
- `EMAIL_RECEIVER` - Recipient email
- `EMAIL_SECURE` - false
- `ALLOWED_ORIGINS` - Frontend URLs (comma-separated)
- `PORT` - Auto-set by Render (don't set manually)

### Vercel (Frontend)
- `VITE_API_URL` - Your Render backend URL

## 🧪 Testing After Deployment

1. **Test Backend**:
   ```bash
   curl https://your-backend.onrender.com/contact \
     -X POST \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
   ```

2. **Test Frontend**:
   - Visit your Vercel URL
   - Fill out the contact form
   - Check if email is received

## 🐛 Troubleshooting

### Backend Issues

1. **Build fails on Render**:
   - Check that `backend/package.json` has all dependencies
   - Verify `start` script is correct

2. **CORS errors**:
   - Make sure `ALLOWED_ORIGINS` includes your frontend URL
   - Check for trailing slashes in URLs

3. **Email not sending**:
   - Verify all email environment variables are set correctly
   - Check Render logs for error messages

### Frontend Issues

1. **Build fails on Vercel**:
   - Check that `frontend/package.json` has all dependencies
   - Verify build command is correct

2. **API calls failing**:
   - Verify `VITE_API_URL` is set correctly
   - Check browser console for CORS errors
   - Ensure backend is running and accessible

3. **404 errors on routes**:
   - Vercel should handle this with the `rewrites` in `vercel.json`
   - Make sure `vercel.json` is in the `frontend` directory

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## ✅ Deployment Checklist

- [ ] Backend deployed to Render
- [ ] Backend environment variables set
- [ ] Backend URL noted
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variable `VITE_API_URL` set
- [ ] `ALLOWED_ORIGINS` updated in Render with frontend URL
- [ ] Contact form tested and working
- [ ] Email receiving correctly

