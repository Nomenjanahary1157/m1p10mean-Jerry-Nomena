const express = require('express');
const router = express.Router();
const RDV = require('../models/rendezvous');


router.get('/rdvs', async (req, res) => {
    try {
        const rdvs = await RDV.find();
        res.json(rdvs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/rdvs/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const rdvs = await RDV.find({ idClient: id }); 
        if (rdvs.length > 0) {
            res.json(rdvs);
        } else {
            res.status(404).json({ message: 'Aucun rendez-vous trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
