const mongoose = require('mongoose');

const MeterSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  balance: { type: Number, required: true },
});

const Meter = mongoose.model('Meter', MeterSchema);
module.exports = Meter;
