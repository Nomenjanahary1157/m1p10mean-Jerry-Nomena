const express = require('express');
const router = express.Router();
const ServEmployerRemise = require('../models/servEmployeRemise');

module.exports = function(router){

    router.get('/servEmployerRemises', async (req, res) => {
        try {
            const servEmployerRemises = await ServEmployerRemise.find();
            res.json(servEmployerRemises);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

return router;
        
}
