const mongoose = require('mongoose');


const user = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    password: String
});

let userModel = mongoose.model('user', user);

module.exports = {
  userModel
};



