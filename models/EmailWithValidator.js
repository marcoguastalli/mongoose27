const mongoose = require('mongoose');
const validator = require('validator');

const EmailWithValidator = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  }
});

module.exports = mongoose.model('EmailWithValidator', EmailWithValidator);