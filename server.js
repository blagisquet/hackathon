// Chargement de socket.io
let io = require('socket.io')();

io.sockets.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_LIFEPLAYER', (data) => {
    io.emit('RECEIVE_LIFEPLAYER', data);
  });
  socket.on('SEND_LIFEENEMY', (data) => {
    io.emit('RECEIVE_LIFEENEMY', data);
  });

});

io.listen(8888);