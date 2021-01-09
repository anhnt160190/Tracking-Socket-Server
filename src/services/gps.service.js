import GpsModel from '../models/gps';

export const GetTrackings = async (req, res) => {
  try {
    const data = await GpsModel.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
};
