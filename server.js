// Chargement de socket.io
let io = require('socket.io')();

io.sockets.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_LIFEPLAYER', (data) => {
    console.log(data)
    io.emit('RECEIVE_LIFEPLAYER', data);
  })
});

io.listen(8888);