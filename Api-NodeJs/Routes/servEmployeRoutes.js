const express = require('express');
const router = express.Router();
const ServEmployer = require('../models/servEmploye');


router.get('/servEmployers', async (req, res) => {
    try {
        const servEmployers = await ServEmployer.find();
        res.json(servEmployers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/servEmployers/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const servEmployers = await ServEmployer.findOne({ idServEmployer: id }); 
        if (servEmployers) {
            res.json(servEmployers);
        } else {
            res.status(404).json({ message: 'servEmployers non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
