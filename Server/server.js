const express = require('express');
const mongoose = require('mongoose');
const clientRoutes = require('./Routes/clientRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://Jerry-Nomena:Jerry-Nomena@cluster0.mgwsizr.mongodb.net/myDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connecté à la base de données MongoDB Atlas'))
.catch((err) => console.error('Erreur de connexion à MongoDB Atlas :', err));

app.use('/api', clientRoutes);

const port = process.env.PORT || 2024;
app.listen(port, () => {
  console.log(`Serveur Express en écoute sur le port ${port}`);
});
