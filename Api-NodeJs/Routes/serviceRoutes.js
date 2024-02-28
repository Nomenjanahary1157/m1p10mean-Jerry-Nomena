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
        const services = await Service.findOne({ idService: id }); 
        if (services) {
            res.json(services);
        } else {
            res.status(404).json({ message: 'services non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/servicesManicure', async (req, res) => {
    try {
        const services = await Service.find({ nomService : "Manicure"}); 
        if (services) {
            res.json(services);
        } else {
            res.status(404).json({ message: 'services non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/servicesPedicure', async (req, res) => {
    try {
        const services = await Service.find({nomService : "pédicure" }); 
        if (services) {
            res.json(services);
        } else {
            res.status(404).json({ message: 'services non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/servicesCoiffure', async (req, res) => {
    try {
        const services = await Service.find({ nomService: "coiffure" }); 
        if (services) {
            res.json(services);
        } else {
            res.status(404).json({ message: 'services non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
