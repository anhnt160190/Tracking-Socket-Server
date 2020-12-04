import * as EventService from './services/event.service';

export const Events = (io) => {
  io.on('connection', (socket) => {
    console.log('---> connection', socket.id)

    socket.on('send_data', async (data) => {
      console.log(`--->time: ${new Date()} receive data: ${JSON.stringify(data)}`);
      await EventService.HandleData(data);
    })
  });
}
