const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/utilisateur');

router.get('/utilisateurs', async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.find(); 
        res.json(utilisateurs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
