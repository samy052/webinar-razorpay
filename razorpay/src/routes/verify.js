// src/routes/verify.js
import { Router } from 'express';
import crypto from 'crypto';
import Order from '../models/Order.js';

const router = Router();

/**
 * POST /api/payment/verify
 * Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 */
router.post('/payment/verify', async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  // hash = HMAC_SHA256(order_id | "|" | payment_id, secret)
  const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = shasum.digest('hex');

  const isValid = digest === razorpay_signature;
  try {
    const orderDoc = await Order.findOne({ razorpayOrderId: razorpay_order_id });
    if (!orderDoc) throw new Error('Order not found');

    orderDoc.status = isValid ? 'paid' : 'failed';
    orderDoc.razorpayPaymentId = razorpay_payment_id;
    orderDoc.razorpaySignature = razorpay_signature;
    await orderDoc.save();

    res.json({ success: isValid });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

export default router;
