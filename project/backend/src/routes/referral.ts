import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { PrismaClient } from '@prisma/client';
import { sendReferralEmail } from '../services/email.js';

const router = Router();
const prisma = new PrismaClient();

// Validation middleware
const referralValidation = [
  body('referrerName').trim().notEmpty().withMessage('Referrer name is required'),
  body('referrerEmail').isEmail().withMessage('Valid referrer email is required'),
  body('friendName').trim().notEmpty().withMessage('Friend name is required'),
  body('friendEmail').isEmail().withMessage('Valid friend email is required'),
  body('courseId').trim().notEmpty().withMessage('Course ID is required'),
];

// Create new referral
router.post('/', referralValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { referrerName, referrerEmail, friendName, friendEmail, courseId } = req.body;

    // Create referral in database
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        friendName,
        friendEmail,
        courseId,
        status: 'PENDING'
      }
    });

    // Send email notification
    await sendReferralEmail({
      to: friendEmail,
      referrerName,
      friendName,
      courseId
    });

    res.status(201).json({
      message: 'Referral created successfully',
      referral
    });
  } catch (error) {
    console.error('Error creating referral:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get referrals by referrer email
router.get('/by-referrer/:email', async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany({
      where: {
        referrerEmail: req.params.email
      }
    });

    res.json(referrals);
  } catch (error) {
    console.error('Error fetching referrals:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as referralRouter };