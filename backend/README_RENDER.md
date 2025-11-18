# Render Deployment Instructions

## Quick Setup

1. **Create a new Web Service** on Render
2. **Connect your GitHub repository**
3. **Configure**:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node`

## Environment Variables

Set these in Render Dashboard → Environment:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=asha.srp1@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=admin@dntrading.co.in
EMAIL_SECURE=false
ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

**Note**: `PORT` is automatically set by Render - don't set it manually.

## After Frontend Deployment

Update `ALLOWED_ORIGINS` with your actual Vercel frontend URL:
```
ALLOWED_ORIGINS=https://your-project.vercel.app
```

## Health Check

Render will automatically check if your service is running. The server responds on the `/contact` endpoint.

