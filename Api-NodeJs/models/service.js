const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  idService: {
    type: Number,
    required: true
  },
  nomService: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  dure: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Service", serviceSchema, "Service");
