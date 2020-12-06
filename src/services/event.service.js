import { producer, Keys } from '../config';

export const HandleData = async (data) => {
  try {
    await producer.connect();
    await producer.send({
      topic: Keys.KAFKA_TOPIC,
      messages: [{ value: JSON.stringify(data) }],
    });
  } catch (error) {
    console.log(`HandleData error ${error}`);
  } finally {
    await producer.disconnect();
  }
};
