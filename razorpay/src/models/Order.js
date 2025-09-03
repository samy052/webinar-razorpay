// src/models/Order.js
import mongoose from 'mongoose';   

const orderSchema = new mongoose.Schema({
  fullName:      { type: String, required: true },
  email:         { type: String, required: true},
  phone:         { type: String, required: true ,},
  businessType:  { type: String, required: true },

  amount: Number,
  razorpayOrderId:   String,
  razorpayPaymentId: String,
  razorpaySignature: String,

  status: {
    type: String,
    enum: [
      'created',
      'checkout_opened',
      'cancelled',
      'failed',
      'paid',
      'refunded',
      'abandoned'
    ]
  },
  checkoutOpenedAt: Date,
  paidAt:      Date,
  cancelledAt: Date,
  lastError:   String
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
