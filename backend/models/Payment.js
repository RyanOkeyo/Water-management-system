const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
  meter: { type: mongoose.Schema.Types.ObjectId, ref: 'Meter', required: true },   // Reference to Meter model
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
});

module.exports = mongoose.model('Payment', paymentSchema);
