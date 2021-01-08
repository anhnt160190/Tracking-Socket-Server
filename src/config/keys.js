export const Keys = {
  KAFKA_BROKER: process.env.KAFKA_BROKER || 'kafka:9092',
  KAFKA_TOPIC: process.env.KAFKA_TOPIC || 'topic_01',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/tracking',
};
