db = connect( 'mongodb://localhost/' );

const client = db.collection('Client');
db.client.insertMany([
    { id: 1, nom: 'ANDRIANIAINA', prenom: 'Jerry', username: 'jex', mdp: '12345'},
    { id: 2, nom: 'RAMAROKOTO', prenom: 'Nomena', username: 'nom', mdp: '12345'},
    // { id: 3, nom: 'RANDRIA', prenom: 'Naina', username: 'nain', mdp: '12345'},
]);

const employer = db.collection('Employer');
db.employer.insertMany([ 
    {idEmployer: 1, nomEmployer: 'RAKOTO',prenomEmployer:'tanjona' ,salaire:500, dateEmbauche:new Date("<YYYY-mm-ddTHH:MM:ss>") ,dateRenvoie:new Date("<YYYY-mm-ddTHH:MM:ss>")},
    {idEmployer: 2, nomEmployer: 'RABE',prenomEmployer:'jean' ,salaire:500, dateEmbauche:new Date("<YYYY-mm-ddTHH:MM:ss>") ,dateRenvoie:new Date("<YYYY-mm-ddTHH:MM:ss>")},
]);

const service = db.collection('Service');
db.service.insertMany([
    { idService: 1, nomService: 'Brushing', prix:'20000',dure:{ $minute: "2014-01-01T08:15:39.736Z"}},
    { idService: 2, nomService: 'Manicure',prix:'10000',dure:{ $minute: "2014-01-01T08:15:39.736Z"}},
    { idService: 3, nomService: 'Pedicure',prix:'15000',dure:{ $minute: "2014-01-01T08:15:39.736Z"}}
]);

const servEmployer= db.collection('ServEmployer');
db.servEmployer.insertMany([
    { idServEmployer: 1, idService: 1, idEmployer:1},
    { idServEmployer: 2, idService: 2,idEmployer:2},
    { idServEmployer: 3, idService: 3,idEmployer:2}
]);

const rdv= db.collection('RDV');
await rdv.insertOne({ id: 1, idClient: 1, idServEmployer: 1, date: new Date("<YYYY-mm-ddTHH:MM:ss>") });


const servEmployerRemise = db.collection('ServEmployerRemise');
await servEmployerRemise.insertOne({ id: 1, idClient: 3, idService: 1,  remise: 1, dateDebut: new Date("<YYYY-mm-ddTHH:MM:ss>") , dateFin:new Date("<YYYY-mm-ddTHH:MM:ss>")});

const planningEmployer = db.collection('PlanningEmployer');
db.planningEmployer.insertMany([
    { idplanningEmployer: 1,  idEmployer: 1, disponibilite:'1010101' ,debutSemaine:new Date("<YYYY-mm-ddTHH:MM:ss>") },
    { idplanningEmployer: 2,  idEmployer: 2, disponibilite:'1111111' ,debutSemaine:new Date("<YYYY-mm-ddTHH:MM:ss>") }
]);

const typeDepense = db.collection('TypeDepense');
db.typeDepense.insertMany([
    { idtypeDepense: 1, typeDepense: 'Salaire'},
    { idtypeDepense: 2, typeDepense: 'Loyer', },
    { idtypeDepense: 3, typeDepense: 'Achat pièce'},
    { idtypeDepense: 4, typeDepense: 'Autre dépenses'}

]);

const depenseCollection = db.collection('Depense');
await depenseCollection.insertOne({ idDepense: 1, idTypeDepense: 2, cout:1000000 });



