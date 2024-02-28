var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors'); 

var clientRoutes = require('./Routes/clientRoutes'); 
var DepenseRoutes = require('./Routes/depenseRoutes');
var EmployeRoutes = require('./Routes/employeRoutes');
var PlanningRoutes = require('./Routes/planningRoutes');
var RendezvousRoutes = require('./Routes/rendezvousRoutes');
var ServiceRoutes = require('./Routes/serviceRoutes');
var ServEmployeRoutes = require('./Routes/servEmployeRoutes');
var ServEmployeRemiseRoutes = require('./Routes/servEmployeRemiseRoutes');
var TypeDepenseRoutes = require('./Routes/typeDepenseRoutes');

var app = express();
var port = process.env.PORT || 2024;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const username = 'Jerry-Nomena';
const password = 'Jerry-Nomena';
const dbName = 'myDatabase';

mongoose.connect(`mongodb+srv://Jerry-Nomena:Jerry-Nomena@cluster0.mgwsizr.mongodb.net/myDatabase?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

app.use('/api', clientRoutes);
app.use('/api', DepenseRoutes);
app.use('/api', EmployeRoutes);
app.use('/api', PlanningRoutes);
app.use('/api', RendezvousRoutes);
app.use('/api', ServiceRoutes);
app.use('/api', ServEmployeRoutes);
app.use('/api', ServEmployeRemiseRoutes);
app.use('/api', TypeDepenseRoutes);

app.listen(port, function() {
    console.log('Running the server on port ' + port);
});


