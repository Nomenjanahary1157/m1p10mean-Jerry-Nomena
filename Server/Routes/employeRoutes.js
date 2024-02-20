const express = require('express');
const router = express.Router();
const Employer = require('../models/employe');

module.exports = function(router){

router.get('/employers', async (req, res) => {
    try {
        const employers = await Employer.find();
        res.json(employers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

return router;
        
}

