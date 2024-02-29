const express = require('express');
const router = express.Router();
const Service = require('../models/service');

router.post('/services', async (req, res) => {
    try {
        const service = new Service({
            idService: req.body.idService,
            nomService: req.body.nomService,
            prix: req.body.prix,
            dure: req.body.dure,
            nomOption: req.body.nomOption
        });
        
        const newService = await service.save();
        
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/services/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const services = await Service.findOne({ idService: id }); 
        if (services) {
            res.json(services);
        } else {
            res.status(404).json({ message: 'services non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/servicesManicure', async (req, res) => {
    try {
        const services = await Service.find({ nomService : "Manicure"}); 
        if (services) {
            res.json(services);
        } else {
            res.status(404).json({ message: 'services non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/servicesPedicure', async (req, res) => {
    try {
        const services = await Service.find({nomService : "pédicure" }); 
        if (services) {
            res.json(services);
        } else {
            res.status(404).json({ message: 'services non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/servicesCoiffure', async (req, res) => {
    try {
        const services = await Service.find({ nomService: "coiffure" }); 
        if (services) {
            res.json(services);
        } else {
            res.status(404).json({ message: 'services non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/service/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const deletedService = await Service.findByIdAndDelete(id);

        if (!deletedService) {
            return res.status(404).json({ message: "Service non trouvé." });
        }

        return res.status(200).json({ message: "Service supprimé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la suppression du service :", error);
        return res.status(500).json({ message: "Erreur interne du serveur." });
    }
});

module.exports = router;