const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.post('/clients', async (req, res) => {
    const {id, nom, prenom, username, mdp } = req.body;

    try {
        if (!id ||!nom || !prenom || !username || !mdp) {
            return res.status(400).json({ success: false, message: 'Tous les champs sont obligatoires' });
        }

        const existingClient = await Client.findOne({ username: username });
        if (existingClient) {
            return res.status(400).json({ success: false, message: 'Pseudo déjà pris' });
        }

        const newClient = new Client({
            id: id,
            nom: nom,
            prenom: prenom,
            username: username,
            mdp: mdp
        });

        await newClient.save();
        res.status(201).json({ success: true, message: 'Compte enregistré, veuillez vous connecter !' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
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
        const client = await Client.findOne({ _id: id }); 
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
        const client = await Client.findOne({ username: nomEmployer, mdp: motdepasse }); 
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
