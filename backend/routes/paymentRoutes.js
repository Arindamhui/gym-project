const express = require('express');
const Payment = require('../models/Payment');
const router = express.Router();
// Add a new payment

router.post('/', async (req, res) => {
    const { payment_amount, late_fine, payment_mode, member_id } = req.body;

    // Calculate total_amount
    const total_amount = payment_amount + late_fine;

    const newPayment = new Payment({
        payment_amount,
        late_fine,
        total_amount,
        payment_mode,
        member_id
    });

    try {
        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// see all payments
router.get('/', async (_req, res) => {
    try {
        const payments = await Payment.find().populate('member_id');
        res.status(200).json(payments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a payment
router.get('/:id', async (req, res) => {
    const { payment_amount, late_fine, payment_mode } = req.body;

    try {
        // Calculate total_amount
    const total_amount = payment_amount + late_fine;


        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, { payment_amount, late_fine, total_amount, payment_mode },
            { new: true });
            
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a payment
router.delete('/:id', async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id);
        if(!Payment){
            res.send(' not found please try again!!!!!!!')
        
          }
          else
          {
            res.send('deleted!!!!! hehehe')
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
