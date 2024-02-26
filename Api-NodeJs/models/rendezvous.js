const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  idClient: {
    type: Number,
    required: true
  },
  idServEmployer: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("RDV", rdvSchema, "RDV");
