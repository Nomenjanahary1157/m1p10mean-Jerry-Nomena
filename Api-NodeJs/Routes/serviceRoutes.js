const express = require('express');
const router = express.Router();
const Service = require('../models/service');

router.get('/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/services/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const service = await Service.findById(id); 
        if (service) {
            res.json(service);
        } else {
            res.status(404).json({ message: 'Service non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/services', async (req, res) => {
    const service = new Service({
        minute: req.body.minute
    });

    try {
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
