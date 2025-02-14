import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { referralRouter } from './routes/referral.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/referrals', referralRouter);

app.listen(port, () => {
  console.log(`Accredian backend server running on port ${port}`);
});