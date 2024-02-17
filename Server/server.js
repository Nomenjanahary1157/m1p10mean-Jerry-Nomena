const express = require('express');
const mongoose = require('mongoose');
const clientRoutes = require('./Routes/clientRoutes');
const DepenseRoutes = require('./Routes/depenseRoutes');
const EmployeRoutes = require('./Routes/employeRoutes');
const PlanningRoutes = require('./Routes/planningRoutes');
const RendezvousRoutes = require('./Routes/rendezvousRoutes');
const ServiceRoutes = require('./Routes/serviceRoutes');
const ServEmployeRoutes = require('./Routes/servEmployeRoutes');
const ServEmployeRemiseRoutes = require('./Routes/servEmployeRemiseRoutes');
const TypeDepenseRoutes = require('./Routes/typeDepenseRoutes');


const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://Jerry-Nomena:Jerry-Nomena@cluster0.mgwsizr.mongodb.net/myDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connecté à la base de données MongoDB Atlas'))
.catch((err) => console.error('Erreur de connexion à MongoDB Atlas :', err));

app.use('/api', clientRoutes);
app.use('/api', DepenseRoutes);
app.use('/api', EmployeRoutes);
app.use('/api', PlanningRoutes);
app.use('/api', RendezvousRoutes);
app.use('/api', ServiceRoutes);
app.use('/api', ServEmployeRoutes);
app.use('/api', ServEmployeRemiseRoutes);
app.use('/api', TypeDepenseRoutes);

const port = process.env.PORT || 2024;
app.listen(port, () => {
  console.log(`Serveur Express en écoute sur le port ${port}`);
});
