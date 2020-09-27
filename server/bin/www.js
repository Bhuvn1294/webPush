#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app';
import debugLib from 'debug';
import http from 'http';

const debug = debugLib('webPush:server');

import pushCtrl from '../controllers/webPush.controller'

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
//var io = require('socket.io').listen(server);

/* io.on('connection', (socket) => {

  console.log('new connection made.');


  socket.on('join', function (data) {
    //joining
    socket.join(data.room);

    console.log(data.user + 'joined the room : ' + data.room);

    socket.broadcast.to(data.room).emit('new user joined', { user: data.user, message: 'has joined this room.' });
  });


  socket.on('leave', function (data) {

    console.log(data.user + 'left the room : ' + data.room);

    socket.broadcast.to(data.room).emit('left room', { user: data.user, message: 'has left this room.' });

    socket.leave(data.room);
  });

  socket.on('message', function (data) {

    io.in(data.room).emit('new message', { user: data.user, message: data.message });
    let payload = {
      notification: {
        data: { url: "https://angular.io/api/service-worker/SwPush", message: data.message },
        title: 'New Mesage From' + data.user,
        vibrate: [100, 50, 100]
      }
    }
    const pushSubscription = {
      "endpoint": "https://fcm.googleapis.com/fcm/send/dbyFaKHi16E:APA91bHqOoyYZfiwS2MGqmkrJTr5RB27n-Mt161QsmDkxPQu1Wld3GzWKEBTXsGHRsugFGdqAfL62vjPMe54iYDLgncLaC9vQAt1XGroNCNU6Cv5Ah2D-NiIgsbNtKUkXzf-wCu6xCYL",
      "expirationTime": null,
      "keys": { "p256dh": "BB3fwZkNXPc2HOILNQxZ7QlVLgSNVGnYi4ocYfNXb-DhrEtm6uZt1I7DHMgzg2AD8KuDuDePGLEpyUg0-Szbq1k", "auth": "tk8pOM0WL8a6jj1Ug-8CUQ" }
    }
    pushCtrl.sendRealTime(pushSubscription, payload)

  })
});
 */


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});


server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


