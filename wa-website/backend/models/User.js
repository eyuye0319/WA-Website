const mongoose = require('mongoose');

// This is the "Schema" - the rulebook for what a user looks like
const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true  // This stops two people from using the same email
  },
  password: { 
    type: String, 
    required: true 
  }
}, { timestamps: true }); // This automatically records WHEN they signed up

// We export it so we can use it in our Login/Register logic later
module.exports = mongoose.model('User', UserSchema);