const express = require('express');
const router = express.Router();
const Employer = require('../models/employe');

router.get('/employers', async (req, res) => {
    try {
        const employers = await Employer.find();
        res.json(employers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;

