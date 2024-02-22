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

module.exports = router;
