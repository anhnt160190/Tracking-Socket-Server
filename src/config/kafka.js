import { Kafka } from 'kafkajs';
import { Keys } from './keys';

const kafka = new Kafka({
  clientId: 'save_data',
  brokers: [Keys.KAFKA_BROKER],
});

export const producer = kafka.producer();
