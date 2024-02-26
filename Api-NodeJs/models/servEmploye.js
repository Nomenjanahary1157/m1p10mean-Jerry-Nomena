const mongoose = require('mongoose');

const servEmployerSchema = new mongoose.Schema({
  idServEmployer: {
    type: Number,
    required: true
  },
  idService: {
    type: Number,
    required: true
  },
  idEmployer: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("ServEmployer", servEmployerSchema, "ServEmployer");
