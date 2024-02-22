const express = require('express');
const router = express.Router();
const TypeDepense = require('../models/typeDepense');


router.get('/typeDepenses', async (req, res) => {
    try {
        const typeDepenses = await TypeDepense.find();
        res.json(typeDepenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;