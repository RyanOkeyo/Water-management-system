const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;
