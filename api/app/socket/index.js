'use strict';

module.exports = (io) =>{
  io.sockets.on('connection', (socket)=>{
    console.log('user connected');
    socket.on('disconnect', ()=> {
      console.log('User disconnected');
    });

    require('./auth')(socket,io)

  });
};
