const express = require('express');
const router = express.Router();
const ServEmployer = require('../models/servEmploye');

router.post('/servEmployers', async (req, res) => {
    const { idServEmployer, idService, idEmployer } = req.body;

    try {
        if (!idServEmployer || !idService || !idEmployer) {
            return res.status(400).json({ success: false, message: 'Tous les champs sont obligatoires' });
        }

        const existingServEmployer = await ServEmployer.findOne({ idServEmployer: idServEmployer });
        if (existingServEmployer) {
            return res.status(400).json({ success: false, message: 'ID de service employeur déjà utilisé' });
        }

        const newServEmployer = new ServEmployer({
            idServEmployer: idServEmployer,
            idService: idService,
            idEmployer: idEmployer
        });

        await newServEmployer.save();
        res.status(201).json({ success: true, message: 'Enregistrement inséré avec succès.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Erreur lors de l\'insertion de l\'enregistrement.' });
    }
});


router.get('/servEmployers', async (req, res) => {
    try {
        const servEmployers = await ServEmployer.find();
        res.json(servEmployers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/servEmployers/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const servEmployers = await ServEmployer.findOne({ idServEmployer: id }); 
        if (servEmployers) {
            res.json(servEmployers);
        } else {
            res.status(404).json({ message: 'servEmployers non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/servElatest', async (req, res) => {
    try {
        const latestServEmployer = await ServEmployer.findOne()
            .sort({ idServEmployer: -1 }) 
            .limit(1); 
        if (latestServEmployer) {
            res.json(latestServEmployer);
        } else {
            res.status(404).json({ message: 'Aucun servEmployer trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
