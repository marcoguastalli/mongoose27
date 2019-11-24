const mongoose = require('mongoose');
const validator = require('validator');

const ReferenceSchema = new mongoose.Schema({
  references: {
    type: String,
    required: true,
    unique: true,
    lowercase: false
  }
});

module.exports = mongoose.model('ReferenceSchema', ReferenceSchema);