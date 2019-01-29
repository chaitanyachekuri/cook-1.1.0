'use strict';

const mongoose = require('mongoose');
const config = require('../config');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

let userModel = require('./auth').userModel;

module.exports={
  mongoose,
  userModel
};



