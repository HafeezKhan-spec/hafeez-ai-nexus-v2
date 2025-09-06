import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Initialize Resend only if API key is provided
let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
} else {
  console.warn('⚠️  RESEND_API_KEY not found in environment variables');
  console.warn('   Please add your Resend API key to the .env file');
  console.warn('   Server will start but email functionality will be disabled');
}

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Contact form email endpoint
app.post('/api/send-contact-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({ 
        error: 'Email service not configured' 
      });
    }

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use Resend's default domain
      to: ['hk386579@gmail.com'], // Your email address (corrected)
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #6366f1; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      reply_to: email, // Allow you to reply directly to the sender
    });

    // Check if the email was actually sent successfully
    if (emailResponse.error) {
      console.error('Resend API error:', emailResponse.error);
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: emailResponse.error.message 
      });
    }

    console.log('Email sent successfully:', emailResponse);
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!',
      id: emailResponse.data?.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found' 
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Express server running on port ${PORT}`);
  console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-contact-email`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
});

export default app;