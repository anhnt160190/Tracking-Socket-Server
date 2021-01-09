import { Schema, model } from 'mongoose';

const GpsSchema = new Schema(
  {
    lat: Number,
    lng: Number,
    license: String,
  },
  { timestamps: true }
);

export default model('gps', GpsSchema);
