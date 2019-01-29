'use strict';
const helper = require('../helpers');
module.exports = (socket,io) =>{
    socket.on('authenticate', v=>{
        createUser(v).then(user =>{
            io.sockets.emit('authenticated',user);
        }).catch(err =>{
            io.sockets.emit('authenticated',err);
        })
    });
};

let createUser = (user) =>{
    return new Promise((resolve, reject) =>{
        helper.findUser({email: user.email, password: user.password}).then(value => {
         if(value.length === 0){
             helper.createNewUser(user).then(u =>{
                 console.log(u);
                 resolve(u._doc);
             }).catch(err =>{
                 reject(err);
             });
         }else{
          reject('duplicate user');
         }
        }).catch(err =>{
            reject(err);
        });
    });
};