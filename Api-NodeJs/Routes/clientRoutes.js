const express = require('express');
const router = express.Router();
const Client = require('../models/client');


router.post('/clients', async (req, res) => {
    const {id, nom, prenom, username, mdp, argent } = req.body;

    try {
        if (!id ||!nom || !prenom || !username || !mdp|| !argent) {
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
            mdp: mdp,
            argent: argent
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

router.put('/clients/:id/update-argent', async (req, res) => {
    const clientId = req.params.id;
    const argentInserer = req.body.argent;

    try {
        const client = await Client.findOne({ id: clientId });

        if (!client) {
            return res.status(404).json({ success: false, message: 'Client non trouvé' });
        }

        const argentActuel = client.argent;

        if (argentActuel < argentInserer) {
            return res.status(400).json({ success: false, message: 'Montant inséré supérieur au solde du client' });
        }

        const nouveauSolde = argentActuel - argentInserer;

        client.argent = nouveauSolde;
        await client.save();

        return res.status(200).json({ success: true, message: 'Montant d\'argent du client mis à jour avec succès' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour du montant d\'argent du client' });
    }
});


module.exports = router;
