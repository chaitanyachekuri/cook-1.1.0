'use strict';

let ioServer = app =>{
  const server = require('http').Server(app);
  const io = require('socket.io')(server);

  require('./socket')(io, app);
  return server;
};

module.exports = {
  ioServer,
  router: require('./rest-api')
};
