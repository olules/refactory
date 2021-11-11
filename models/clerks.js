const mongoose = require('mongoose');

const passportmongoose = require('passport-local-mongoose');

const clerkSchema = new mongoose.Schema({

  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },

});
clerkSchema.plugin(passportmongoose, {
  usernameField: 'email',

});

module.exports = mongoose.model('ClerkReg', clerkSchema);