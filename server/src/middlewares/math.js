import * as placesCtrl from "../controllers/places.controller";
import Rate from "../models/rate.model";
import User from "../models/user.model";

export const getRate = async (req, res, next) => {
  try {
    const user = await User.findById(req.jwt_payload.user.id);
    const rate = await Rate.find({ _id: { $in: user.rate } });
    const fee = rate[0].toObject().fee;
    console.log(`Llegué hasta ${fee}`);

    req.body.fee = fee;
  } catch (error) {
    next(error);
  }
  return next();
};

export const getCost = async (req, res, next) => {
  try {
    console.log(`Entré a getCost`);
    const { origin, destination, fee } = req.body;
    const distance = await placesCtrl.getDistance(origin, destination);
    console.log(fee);
    // AUN NO SE COMO OBTENER EL FEE DESDE ESTE OBJETO QUE YA ESTA EN EL BODY
    const cost = distance * fee;
    req.body.fee = fee;
    req.body.distance = distance;
    req.body.estimated_cost = cost;
  } catch (error) {
    next(error);
  }
  return next();
};
