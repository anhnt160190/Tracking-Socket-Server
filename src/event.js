import * as EventService from './services/event.service';

export const Events = (io) => {
  io.on('connection', (socket) => {
    console.log('---> connection')
  });

  io.on('send_data', async (data) => {
    console.log(`--->time: ${new Date()} receive data: ${data}`);
    await EventService.HandleData(data);
  })
}
