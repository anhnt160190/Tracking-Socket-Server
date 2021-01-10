import { Schema, model } from 'mongoose';

const CarPercentSchema = new Schema(
  {
    car: Number,
    motorbike: Number,
    bus: Number,
    bike: Number,
    walk: Number,
    others: Number,
  },
  { timestamps: true }
);

export const CarPercent = model('car_percent', CarPercentSchema);

const CarColorSchema = new Schema(
  {
    black: Number,
    white: Number,
    blue: Number,
    red: Number,
    others: Number,
  },
  { timestamps: true }
);

export const CarColor = model('car_color', CarColorSchema);

const CarDestinySchema = new Schema(
  {
    hour: Number,
    total: Number,
  },
  { timestamps: true }
);

export const CarDestiny = model('car_destiny', CarDestinySchema);

const AccidentSchema = new Schema(
  {
    year: Number,
    month: Number,
    total: Number,
  },
  { timestamps: true }
);

export const Accident = model('accident', AccidentSchema);
