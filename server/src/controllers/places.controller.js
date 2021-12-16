import Place from "../models/place.model";

export const getPlaces = async (req, res) => {
  const places = await Place.find({});
  res.json(places);
};

export const getDistance = async (origin, destination) => {
  try {
    // const { origin, destination } = req.body;
    const origin_place = await Place.findOne({ origin: origin });
    const destination_place = await Place.findOne({ destination: destination });
    const distance =
      origin_place.dist_to_warehouse + destination_place.dist_to_warehouse;
    // console.log(`Distance is equal to ${distance}`);
    return distance;
  } catch (error) {
    console.log(error);
    next(error);
  }
  return next();
};
