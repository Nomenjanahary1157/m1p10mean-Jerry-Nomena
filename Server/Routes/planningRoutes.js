const express = require('express');
const router = express.Router();
const PlanningEmployer = require('../models/planning');

module.exports = function(router){

    router.get('/planningemployers', async (req, res) => {
        try {
            const planningEmployers = await PlanningEmployer.find();
            res.json(planningEmployers);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

return router;
        
}


