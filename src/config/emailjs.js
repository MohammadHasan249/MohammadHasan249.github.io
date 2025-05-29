// EmailJS Configuration
// You need to replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID', 
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// For development, you can set these directly:
// export const EMAILJS_CONFIG = {
//   SERVICE_ID: 'service_xxxxxxx',
//   TEMPLATE_ID: 'template_xxxxxxx',
//   PUBLIC_KEY: 'xxxxxxxxxxxxxxx',
// };

/*
EmailJS Setup Instructions:

1. Go to https://www.emailjs.com/ and create an account
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email
   - {{subject}} - Email subject
   - {{message}} - Email message
   - {{to_email}} - Your email (where you want to receive messages)

4. Get your Public Key from the EmailJS dashboard
5. Replace the values above with your actual credentials

Example Email Template:
---
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
---

6. Create a .env file in your project root with:
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
*/ 