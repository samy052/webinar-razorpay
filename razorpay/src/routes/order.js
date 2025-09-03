// src/routes/order.js
import { Router } from 'express';
import Razorpay from 'razorpay';
import Order from '../models/Order.js';
import crypto from 'crypto';

const router = Router();
const razorpay = new Razorpay({
  key_id:     process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/**
 * POST /api/order
 * Body: { fullName, email, phone, businessType, amount }
 * amount in rupees – we convert to paise for Razorpay
 */



function validate(body) {
  const { fullName, email, phone, businessType, amount } = body;
  if (!fullName?.trim()) return 'Name required';
  if (!email?.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) return 'Invalid email';
  if (!phone?.match(/^\d{10}$/)) return 'Phone 10 digits';
  if (!businessType?.trim()) return 'Business type required';
  if (!amount || isNaN(amount) || amount <= 0) return 'Amount invalid';
  return null;
}
router.post('/order', async (req, res) => {
  /* 0️⃣ input validation */
  const errMsg = validate(req.body);
  if (errMsg) return res.status(400).json({ error: errMsg });

  const session = await Order.startSession();   // mongoose txn (optional)
  session.startTransaction();
  try {
    const { fullName, email, phone, businessType, amount } = req.body;

    /* 1️⃣ local Order create */
    const orderDoc = await Order.create([{
      fullName, email, phone, businessType,
      amount: Math.round(amount * 100)   // rupees → paise & round off
    }], { session }).then(d => d[0]);

    /* 2️⃣ Razorpay order create */
    const razorpayOrder = await razorpay.orders.create({
      amount: orderDoc.amount,
      currency: 'INR',
      receipt: `rcpt_${orderDoc._id}`,
      payment_capture: 1
    });

    /* 3️⃣ save razorpayOrderId */
    orderDoc.razorpayOrderId = razorpayOrder.id;
    await orderDoc.save({ session });

    await session.commitTransaction();

    /* 4️⃣ response */
    res.json({
      keyId: process.env.RAZORPAY_KEY_ID,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,      // paise
      currency: razorpayOrder.currency,
      name: orderDoc.fullName,
      email: orderDoc.email,
      phone: orderDoc.phone
    });

  } catch (e) {
    await session.abortTransaction();

    // ⛔ Razorpay fail ⇒ local order को failed mark करो
    if (e?.error?.description || e?.message?.includes('Razorpay')) {
      await Order.findByIdAndUpdate(
        // orderDoc may be undefined if validation के पहले ही फटा
        orderDoc?._id,
        { status: 'failed', lastError: e.error?.description || e.message }
      );
    }
    console.error(e);
    res.status(500).json({ error: 'Unable to create order' });
  } finally {
    session.endSession();
  }
});

export default router;




