
import { Router } from 'express';
import Order from '../models/Order.js';


const router = Router();
router.post('/order/:orderId/checkout-opened', async (req, res) => {
  await Order.findOneAndUpdate(
    { razorpayOrderId: req.params.orderId, status: 'created' },
    { status: 'checkout_opened', checkoutOpenedAt: new Date() }
  );
  res.sendStatus(204);
});


router.post('/order/:orderId/cancel', async (req, res) => {
  await Order.findOneAndUpdate(
    { razorpayOrderId: req.params.orderId, status: { $in: ['created','checkout_opened'] } },
    { status: 'cancelled', cancelledAt: new Date() }
  );
  res.sendStatus(204);
});


// Cancelled payment handler
router.post('/payment/cancel', async (req, res) => {
  const { orderId } = req.body;

  if (!orderId) {
    return res.status(400).json({ success: false, error: "Missing orderId" });
  }

  try {
    const orderDoc = await Order.findOne({ razorpayOrderId: orderId });
    if (!orderDoc) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    // Don’t overwrite paid or failed orders
    if (["paid", "failed", "cancelled"].includes(orderDoc.status)) {
      return res.json({ success: true, message: "Status already updated" });
    }

    orderDoc.status = 'cancelled';
    orderDoc.cancelledAt = new Date();
    await orderDoc.save();

    res.json({ success: true });
  } catch (err) {
    console.error("Cancel error:", err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

export default router;