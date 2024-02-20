const express = require('express');
const router = express.Router();
const ServEmployer = require('../models/servEmploye');

module.exports = function(router){

    router.get('/servEmployers', async (req, res) => {
        try {
            const servEmployers = await ServEmployer.find();
            res.json(servEmployers);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    return router;
        
}