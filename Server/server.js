// server.js

const express = require('express');
const mongoose = require('mongoose');
const utilisateurRoutes = require('./routes/utilisateurRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/m1p10mean-Nomena-Jerry', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à la base de données MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB :', err));

app.use('/api', utilisateurRoutes);

const port = process.env.PORT || 2024;
app.listen(port, () => {
  console.log(`Serveur Express en écoute sur le port ${port}`);
});
