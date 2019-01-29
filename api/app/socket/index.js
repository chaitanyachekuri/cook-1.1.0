'use strict';

module.exports = (io, app) =>{
  io.sockets.on('connection', (socket)=>{
    console.log('user connected');
    socket.on('disconnect', ()=> {
      console.log('User disconnected');
    });
    socket.on('test', v=>{
      console.log(v);
      console.log('test');
      io.sockets.emit('backend','working');
    })
  });
};
