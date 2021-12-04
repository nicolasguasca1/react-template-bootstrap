import jwt from "jsonwebtoken";
import User from "../models/user.model";
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(403)
        .send({ auth: false, message: "No se ha introducido un token." });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, { password: 0 });
    console.log(user);

    if (!user)
      return res
        .status(404)
        .send({ auth: false, message: "Usuario no encontrado." });
    next();
  } catch (error) {
    return res.status(401).send({ auth: false, message: "Unauthorized" });
  }

  // const bearerHeader = req.headers['authorization'];
  // if (typeof bearerHeader !== 'undefined') {
  //     const bearer = bearerHeader.split(' ');
  //     const bearerToken = bearer[1];
  //     req.token = bearerToken;
  //     next();
  // } else {
  //     res.sendStatus(403);
  // }
};
