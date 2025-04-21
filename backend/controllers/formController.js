const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

exports.handleFormSubmission = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ✅ use Gmail service
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: 'New Contact Form Submission',
      text: message,
      html: `
             <h2 style="color:#011325;">FNP GLOBAL LEAD/QUERY</h2>
             <hr style="border:1px solid #ccc; margin:10px 0;" />
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>`
    });

    res.status(200).json({ message: 'Form submitted successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
