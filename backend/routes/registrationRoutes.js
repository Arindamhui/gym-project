const express = require('express');
const Registration = require('../models/Registration');
const router = express.Router();

// Add a new registration
router.post('/', async (req, res) => {
    const newRegistration = new Registration(req.body);
    try {
        const savedRegistration = await newRegistration.save();
        res.status(201).json(savedRegistration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// see all registrations
router.get('/', async (_req, res) => {
    try {
        const registrations = await Registration.find();
        res.status(200).json(registrations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a registration
router.get('/:id', async (req, res) => {
    try {
        const updatedRegistration = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedRegistration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a registration
router.delete('/:id', async (req, res) => {
    try {
        await Registration.findByIdAndDelete(req.params.id);
        if(!Registration){
        
            res.send(' not found')
        
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
