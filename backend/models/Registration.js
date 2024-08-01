const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    member_name: { type: String, required: true },
    address: { type: String, required: true },
    phone_number: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    membership_start_date: { type: Date, required: true },
    membership_end_date: { type: Date, required: true },
    registration_fees: { type: Number, required: true }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
