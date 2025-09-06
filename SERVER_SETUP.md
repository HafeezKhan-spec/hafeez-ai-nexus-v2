# Express.js Email Server Setup

This project now uses Express.js with Resend for sending emails instead of Supabase Edge Functions.

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the root directory:

```bash
# Copy the example file
cp .env.example .env
```

Then edit `.env` and add your Resend API key:

```env
# Resend API Configuration
RESEND_API_KEY=your_actual_resend_api_key_here

# Server Configuration
PORT=5000

# Frontend Configuration (for development)
VITE_API_URL=http://localhost:5000
```

### 2. Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for an account
3. Create a new API key
4. Copy the API key to your `.env` file

### 3. Running the Application

#### Development Mode (Both Frontend and Backend)

```bash
npm run dev:full
```

This will start both the Express server (port 5000) and the Vite dev server (port 5173).

#### Run Only the Express Server

```bash
npm run dev:server
# or
npm start
```

#### Run Only the Frontend

```bash
npm run dev
```

### 4. API Endpoints

- **Health Check**: `GET /health`
- **Send Email**: `POST /api/send-contact-email`

### 5. Email Configuration

The server is configured to:
- Send emails from `noreply@resend.dev` (Resend's test domain)
- Send emails to `hk3865799@gmail.com`
- Include the sender's email as reply-to for easy responses

### 6. Production Deployment

For production, make sure to:
1. Set your actual domain in the `from` field in `server.js`
2. Update the `VITE_API_URL` environment variable to your production server URL
3. Use a process manager like PM2 for the Express server

### 7. Testing

You can test the email endpoint using curl:

```bash
curl -X POST http://localhost:5000/api/send-contact-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## Dependencies Added

- `express` - Web framework
- `resend` - Email service
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable loading
- `concurrently` - Run multiple commands simultaneously (dev dependency)
- `@types/express` - TypeScript types for Express (dev dependency)
- `@types/cors` - TypeScript types for CORS (dev dependency)