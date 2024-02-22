const express = require('express');
const router = express.Router();
const PlanningEmployer = require('../models/planning');

    router.get('/planningemployers', async (req, res) => {
        try {
            const planningEmployers = await PlanningEmployer.find();
            res.json(planningEmployers);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

module.exports = router;



