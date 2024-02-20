const express = require('express');
const router = express.Router();
const TypeDepense = require('../models/typeDepense');

module.exports = function(router){

    router.get('/typeDepenses', async (req, res) => {
        try {
            const typeDepenses = await TypeDepense.find();
            res.json(typeDepenses);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

return router;
        
}