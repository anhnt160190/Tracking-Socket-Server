import { CarPercent, CarColor, CarDestiny, Accident } from '../models/chart';

export const GetCarPercent = async (req, res) => {
  try {
    const { date } = req.query;
    const rawData = await CarPercent.find({
      createdAt: new ISODate(date),
    });
    let car = 0;
    let motorbike = 0;
    let bus = 0;
    let bike = 0;
    let walk = 0;
    let others = 0;
    for (let i = 0; i < rawData.length; i++) {
      car += rawData[i].car;
      motorbike += rawData[i].bike;
      bus += rawData[i].bus;
      bike += rawData[i].bike;
      walk += rawData[i].walk;
      others += rawData[i].others;
    }
    return { car, motorbike, bus, bike, walk, others };
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const GetCarColor = async (req, res) => {
  try {
    const { date } = req.query;
    const rawData = await CarColor.find({
      createdAt: new ISODate(date),
    });
    let black = 0;
    let white = 0;
    let blue = 0;
    let red = 0;
    let others = 0;
    for (let i = 0; i < rawData.length; i++) {
      black += rawData[i].black;
      white += rawData[i].white;
      blue += rawData[i].blue;
      red += rawData[i].red;
      others += rawData[i].others;
    }
    return { black, white, blue, red, others };
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const GetCarDestiny = async (req, res) => {
  try {
    const { date } = req.query;
    const rawData = await CarDestiny.find({
      year: new Date(date).getFullYear(),
    });
    return {
      1: GetTotalEqualMonth(rawData, 1),
      2: GetTotalEqualMonth(rawData, 2),
      3: GetTotalEqualMonth(rawData, 3),
      4: GetTotalEqualMonth(rawData, 4),
      5: GetTotalEqualMonth(rawData, 5),
      6: GetTotalEqualMonth(rawData, 6),
      7: GetTotalEqualMonth(rawData, 7),
      8: GetTotalEqualMonth(rawData, 8),
      9: GetTotalEqualMonth(rawData, 9),
      10: GetTotalEqualMonth(rawData, 10),
      11: GetTotalEqualMonth(rawData, 11),
      12: GetTotalEqualMonth(rawData, 12),
    };
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const GetCarAccident = async (req, res) => {
  try {
    const { date } = req.query;
    const rawData = await Accident.find({
      year: new Date(date).getFullYear(),
    });
    return {
      1: GetTotalEqualMonth(rawData, 1),
      2: GetTotalEqualMonth(rawData, 2),
      3: GetTotalEqualMonth(rawData, 3),
      4: GetTotalEqualMonth(rawData, 4),
      5: GetTotalEqualMonth(rawData, 5),
      6: GetTotalEqualMonth(rawData, 6),
      7: GetTotalEqualMonth(rawData, 7),
      8: GetTotalEqualMonth(rawData, 8),
      9: GetTotalEqualMonth(rawData, 9),
      10: GetTotalEqualMonth(rawData, 10),
      11: GetTotalEqualMonth(rawData, 11),
      12: GetTotalEqualMonth(rawData, 12),
    };
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const GetTotalEqualMonth = (raw, month) => {
  return raw
    .filter((item) => (item.month = month))
    .reduce((total, val) => (total += val.month), 0);
};
