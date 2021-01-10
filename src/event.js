import * as EventService from './services/event.service';

export const Events = (io) => {
  io.on('connection', (socket) => {
    // console.log('---> connection', socket.id);

    socket.on('gps_data', async (data) => {
      console.log(
        `time: ${new Date()} \n Socket Server receive data: ${JSON.stringify(
          data
        )}`
      );
      await EventService.PushToKafka(data);
      socket.emit('send_to_dashboard', data);
    });
  });
};
