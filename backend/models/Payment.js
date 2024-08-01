const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    payment_date: { type: Date, default: Date.now },
    payment_amount: { type: Number, required: true },
    late_fine: { type: Number, default: 0 },
    total_amount: { type: Number },
    payment_mode: { type: String, required: true },
    member_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Registration', required: true }
});

PaymentSchema.pre('save', function(next) {
    // Calculate total_amount
    this.total_amount = this.payment_amount + this.late_fine;
    next();
});

module.exports = mongoose.model('Payment', PaymentSchema);
