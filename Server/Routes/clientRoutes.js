const express = require('express');
const router = express.Router();
const Client = require('../models/client'); 

router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find({}); 
        console.log("Clients récupérés :", clients); 
        res.json(clients); 
    } catch (err) {
        console.error("Erreur lors de la récupération des clients :", err); 
        res.status(500).json({ message: err.message }); 
    }
});

router.get('/listeClient', async function(req, res){
    const liste = await Client.find({});
    if(liste.length > 0) {
        res.json({ success: true ,  data : liste });
    } else {
        res.json({ success: false, message: "No data" });
    }
});

router.get('/clients/:id', async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (client) {
            console.log(client); 
            res.json(client); 
        } else {
            res.status(404).json({ message: 'Client non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
});

router.post('/clients', async (req, res) => {
    const client = new Client({
        nom: req.body.nom,
        prenom: req.body.prenom,
        username: req.body.username,
        mdp: req.body.mdp
    });

    try {
        const newClient = await client.save(); 
        console.log(newClient); 
        res.status(201).json(newClient); 
    } catch (err) {
        res.status(400).json({ message: err.message }); 
    }
});

module.exports = express.Router();

