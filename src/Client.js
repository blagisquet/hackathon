import { socket } from './Socket';

export const Client = {

  receivedLifePlayer(data){
    socket.on('RECEIVE_LIFEPLAYER', data);
  },
  sendLifePlayer(data){
    socket.emit('SEND_LIFEPLAYER', data)
  },
  receivedLifeEnemy(data){
    socket.on('RECEIVE_LIFEENEMY', data);
  },
  sendLifeEnemy(data){
    socket.emit('SEND_LIFEENEMY', data);
  }

}

