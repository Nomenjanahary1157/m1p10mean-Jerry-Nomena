const mongoose = require('mongoose');

const depenseSchema = new mongoose.Schema({
  idDepense: {
    type: Number,
    required: true
  },
  idTypeDepense: {
    type: Number,
    required: true
  },
  cout: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Depense", depenseSchema, "Depense");
