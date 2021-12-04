import jwt from "jsonwebtoken";
import User from "../models/user.model";
import Role from "../models/role.model";
export const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(403)
      .send({ auth: false, message: "No se ha introducido un token." });
  try {
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
    return res.status(401).send({ auth: false, message: "No autorizado" });
  }
};

export const isInterno = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "interno") {
        next();
        return;
      }
    }
    return res
      .status(401)
      .json({ auth: false, message: "Requiere rol de interno" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }
    return res
      .status(401)
      .json({ auth: false, message: "Requiere rol de Admin" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};