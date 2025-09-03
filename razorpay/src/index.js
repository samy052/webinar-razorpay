// src/index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config'; 

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

// --- connect MongoDB ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error('Mongo error', err));

// --- routes ---
import orderRoutes   from './routes/order.js';
import orderCheckoutRoutes from './routes/orderCheckout.js';

import verifyRoutes  from './routes/verify.js';
import webhookRoutes from './routes/webhook.js';

app.use('/api', orderRoutes);
app.use('/api', orderCheckoutRoutes);
app.use('/api', verifyRoutes);
app.use('/api', webhookRoutes);     // optional

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`));
