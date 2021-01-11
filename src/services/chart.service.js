import { CarPercent, CarColor, CarDestiny, Accident } from '../models/chart';

export const GetCarPercent = async (req, res) => {
  try {
    const now = new Date();
    let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (req.query.date) startDate = new Date(req.query.date);
    let endDate = new Date();
    endDate.setDate(startDate.getDate() + 1);
    const rawData = await CarPercent.find({
      createdAt: { $gte: startDate, $lt: endDate },
    });
    if (rawData.length === 0) {
      return res.status(200).json([]);
    }
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
    return res.status(200).json([car, motorbike, bus, bike, walk, others]);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const GetCarColor = async (req, res) => {
  try {
    const now = new Date();
    let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (req.query.date) startDate = new Date(req.query.date);
    let endDate = new Date();
    endDate.setDate(startDate.getDate() + 1);
    const rawData = await CarColor.find({
      createdAt: { $gte: startDate, $lt: endDate },
    });
    if (rawData.length === 0) {
      return res.status(200).json([]);
    }
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
    return res.status(200).json([black, white, blue, red, others]);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const GetCarDestiny = async (req, res) => {
  try {
    const now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (req.query.date) date = new Date(req.query.date);
    const rawData = await CarDestiny.find();
    if (rawData.length === 0) {
      return res.status(200).json([]);
    }
    return res
      .status(200)
      .json([
        GetTotalEqualHour(rawData, 0),
        GetTotalEqualHour(rawData, 1),
        GetTotalEqualHour(rawData, 2),
        GetTotalEqualHour(rawData, 3),
        GetTotalEqualHour(rawData, 4),
        GetTotalEqualHour(rawData, 5),
        GetTotalEqualHour(rawData, 6),
        GetTotalEqualHour(rawData, 7),
        GetTotalEqualHour(rawData, 8),
        GetTotalEqualHour(rawData, 9),
        GetTotalEqualHour(rawData, 10),
        GetTotalEqualHour(rawData, 11),
        GetTotalEqualHour(rawData, 12),
        GetTotalEqualHour(rawData, 13),
        GetTotalEqualHour(rawData, 14),
        GetTotalEqualHour(rawData, 15),
        GetTotalEqualHour(rawData, 16),
        GetTotalEqualHour(rawData, 17),
        GetTotalEqualHour(rawData, 18),
        GetTotalEqualHour(rawData, 19),
        GetTotalEqualHour(rawData, 20),
        GetTotalEqualHour(rawData, 21),
        GetTotalEqualHour(rawData, 22),
        GetTotalEqualHour(rawData, 23),
      ]);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const GetCarAccident = async (req, res) => {
  try {
    const now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (req.query.date) date = new Date(req.query.date);
    const rawData = await Accident.find({
      year: date.getFullYear(),
    });
    if (rawData.length === 0) {
      return res.status(200).json([]);
    }
    return res
      .status(200)
      .json([
        GetTotalEqualMonth(rawData, 1),
        GetTotalEqualMonth(rawData, 2),
        GetTotalEqualMonth(rawData, 3),
        GetTotalEqualMonth(rawData, 4),
        GetTotalEqualMonth(rawData, 5),
        GetTotalEqualMonth(rawData, 6),
        GetTotalEqualMonth(rawData, 7),
        GetTotalEqualMonth(rawData, 8),
        GetTotalEqualMonth(rawData, 9),
        GetTotalEqualMonth(rawData, 10),
        GetTotalEqualMonth(rawData, 11),
        GetTotalEqualMonth(rawData, 12),
      ]);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const GetTotalEqualMonth = (raw, month) => {
  return raw
    .filter((item) => item.month == month)
    .reduce((total, val) => (total += val.total), 0);
};

const GetTotalEqualHour = (raw, hour) => {
  return raw
    .filter((item) => item.hour == hour)
    .reduce((total, val) => (total += val.total), 0);
};
