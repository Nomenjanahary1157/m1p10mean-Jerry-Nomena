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

router.get('/employers/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const employers = await Employer.findOne({ idEmployer: id }); 
        if (employers) {
            res.json(employers);
        } else {
            res.status(404).json({ message: 'employers non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;

