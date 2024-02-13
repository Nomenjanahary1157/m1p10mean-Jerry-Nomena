const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://Jerry-Nomena:Jerry-Nomena@cluster0.mgwsizr.mongodb.net';

const dbName = 'myDatabase';

const client = new MongoClient(url);

async function deleteCollections() {
  try {
    await client.connect();

    const db = client.db(dbName);

    const collections = await db.collections();
    for (let collection of collections) {
      await collection.drop();
      console.log(`La collection ${collection.collectionName} a été supprimée`);
    }
  } catch (error) {
    console.error('Erreur lors de la suppression des collections:', error);
  } finally {
    await client.close();
  }
}

deleteCollections();
