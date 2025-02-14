import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface EmailData {
  to: string;
  referrerName: string;
  friendName: string;
  courseId: string;
}

export async function sendReferralEmail({ to, referrerName, friendName, courseId }: EmailData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: `${referrerName} has invited you to join Accredian!`,
    html: `
      <h1>Hello ${friendName}!</h1>
      <p>${referrerName} thinks you'd be interested in learning with Accredian.</p>
      <p>They've recommended our ${courseId} course for you.</p>
      <p>Click the link below to get started:</p>
      <a href="${process.env.FRONTEND_URL}/courses/${courseId}">View Course</a>
    `
  };

  await transporter.sendMail(mailOptions);
}