const mongoose = require('mongoose');

const planningEmployerSchema = new mongoose.Schema({
  idplanningEmployer: {
    type: Number,
    required: true
  },
  idEmployer: {
    type: Number,
    required: true
  },
  disponibilite: {
    type: String,
    required: true
  },
  debutSemaine: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("PlanningEmployer", planningEmployerSchema, "PlanningEmployer");
