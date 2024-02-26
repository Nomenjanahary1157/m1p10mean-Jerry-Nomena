const mongoose = require('mongoose');

const servEmployerRemiseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  idClient: {
    type: Number,
    required: true
  },
  idService: {
    type: Number,
    required: true
  },
  remise: {
    type: Number,
    required: true
  },
  dateDebut: {
    type: Date,
    required: true
  },
  dateFin: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("ServEmployerRemise", servEmployerRemiseSchema, "ServEmployerRemise");
