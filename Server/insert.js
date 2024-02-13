const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://Jerry-Nomena:Jerry-Nomena@cluster0.mgwsizr.mongodb.net';

const dbName = 'myDatabase';

const client = new MongoClient(url);

async function insertData() {
  try {
    await client.connect();

    const db = client.db(dbName);

    const data = {
        "Client": [
            { "id": 1, "nom": "ANDRIANIAINA", "prenom": "Jerry", "username": "jex", "mdp": "12345" },
            { "id": 2, "nom": "RAMAROKOTO", "prenom": "Nomena", "username": "nom", "mdp": "12345" }
        ],
        "Employer": [
            { "idEmployer": 1, "nomEmployer": "RAKOTO", "prenomEmployer": "tanjona", "salaire": 500, "dateEmbauche": "2022-02-11T08:00:00", "dateRenvoie": "2022-02-11T17:00:00" },
            { "idEmployer": 2, "nomEmployer": "RABE", "prenomEmployer": "jean", "salaire": 500, "dateEmbauche": "2022-02-11T08:00:00", "dateRenvoie": "2022-02-11T17:00:00" }
        ],
        "Service": [
            { "idService": 1, "nomService": "Brushing", "prix": 20000, "dure": { "$minute": "2014-01-01T08:15:39.736Z" } },
            { "idService": 2, "nomService": "Manicure", "prix": 10000, "dure": { "$minute": "2014-01-01T08:15:39.736Z" } },
            { "idService": 3, "nomService": "Pedicure", "prix": 15000, "dure": { "$minute": "2014-01-01T08:15:39.736Z" } }
        ],
        "ServEmployer": [
            { "idServEmployer": 1, "idService": 1, "idEmployer": 1 },
            { "idServEmployer": 2, "idService": 2, "idEmployer": 2 },
            { "idServEmployer": 3, "idService": 3, "idEmployer": 2 }
        ],
        "RDV": [
            { "id": 1, "idClient": 1, "idServEmployer": 1, "date": "2022-02-11T10:00:00" }
        ],
        "ServEmployerRemise": [
            { "id": 1, "idClient": 3, "idService": 1, "remise": 1, "dateDebut": "2022-02-11T08:00:00", "dateFin": "2022-02-11T17:00:00" }
        ],
        "PlanningEmployer": [
            { "idplanningEmployer": 1, "idEmployer": 1, "disponibilite": "1010101", "debutSemaine": "2022-02-11T08:00:00" },
            { "idplanningEmployer": 2, "idEmployer": 2, "disponibilite": "1111111", "debutSemaine": "2022-02-11T08:00:00" }
        ],
        "TypeDepense": [
            { "idtypeDepense": 1, "typeDepense": "Salaire" },
            { "idtypeDepense": 2, "typeDepense": "Loyer" },
            { "idtypeDepense": 3, "typeDepense": "Achat pièce" },
            { "idtypeDepense": 4, "typeDepense": "Autre dépenses" }
        ],
        "Depense": [
            { "idDepense": 1, "idTypeDepense": 2, "cout": 1000000 }
        ]
    };

    for (let collectionName in data) {
      await db.collection(collectionName).insertMany(data[collectionName]);
      console.log(`Données insérées dans la collection ${collectionName}`);
    }
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données:', error);
  } finally {
    await client.close();
  }
}

insertData();
