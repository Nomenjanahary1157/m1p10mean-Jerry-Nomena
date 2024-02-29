const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  mdp: {
    type: String,
    required: true
  },
  argent: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Client", clientSchema, "Client");
