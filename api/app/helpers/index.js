'use strict';

const db = require('../database');

let createNewUser = profile =>{
  return new Promise((resolve, reject) =>{
    let newUser = new db.userModel({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      password: profile.password
    });

      newUser.save(error =>{
      if(error){
        console.log(error)
      }
      else{
        resolve(newUser);
      }
    });
  });
};

let findUser = id =>{
  return new Promise((resolve, reject) =>{
    db.userModel.find(id, (error, user) =>{
      if(error){
        reject(error)
      }
      else
      {
        console.log('123');
        console.log(user);
        resolve(user);
      }
    });
  });
};

module.exports = {
  createNewUser,
  findUser
};

