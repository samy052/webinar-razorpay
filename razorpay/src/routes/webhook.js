// src/routes/webhook.js
import { Router } from 'express';
import crypto from 'crypto';
import Order from '../models/Order.js';

const router = Router();

router.post('/webhook/razorpay', async (req, res) => {
  const jsonBody = JSON.stringify(req.body);
  const expectedSignature = crypto.createHmac('sha256', process.env.WEBHOOK_SECRET)
    .update(jsonBody)
    .digest('hex');

  const actualSignature = req.headers['x-razorpay-signature'];

  if (expectedSignature === actualSignature) {
    // handle event, e.g. payment.captured
    const event = req.body.event;
    if (event === 'payment.captured') {
      const { order_id, id: payment_id } = req.body.payload.payment.entity;
      await Order.findOneAndUpdate(
        { razorpayOrderId: order_id },
        { status: 'paid', razorpayPaymentId: payment_id }
      );
    }
    res.status(200).end();
  } else {
    res.status(400).send('Invalid signature');
  }
});

export default router;
