const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.post('/clients', async (req, res) => {
    try {
        const client = new Client({
            nom: req.body.nom,
            prenom: req.body.prenom,
            username: req.body.username,
            mdp: req.body.mdp
        });
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/clients/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const client = await Client.findOne({ id: id }); 
        if (client) {
            res.json(client);
        } else {
            res.status(404).json({ message: 'Client non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/clients/:nomEmployer/:motdepasse', async (req, res) => {
    try {
        const nomEmployer = req.params.nomEmployer; 
        const motdepasse = req.params.motdepasse; 
        const client = await Client.findOne({ username : nomEmployer, mdp : motdepasse}); 
        if (client) {
            res.json(client);
        } else {
            res.status(404).json({ message: 'Client non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
