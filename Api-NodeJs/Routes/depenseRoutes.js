const express = require('express');
const router = express.Router();
const Depense = require('../models/depense');


router.get('/depenses', async (req, res) => {
    try {
        const depenses = await Depense.find();
        res.json(depenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;


