const mongoose = require('mongoose');

const typeDepenseSchema = new mongoose.Schema({
  idtypeDepense: {
    type: Number,
    required: true
  },
  typeDepense: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("TypeDepense", typeDepenseSchema, "TypeDepense");
