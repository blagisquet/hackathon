import { socket } from './Socket';

export const Client = {

  receivedLifeplayer(data){
    socket.on('RECEIVE_LIFEPLAYER', data);
  },
  sendLifeplayer(data){
    socket.emit('SEND_LIFEPLAYER', data)
  }
}

