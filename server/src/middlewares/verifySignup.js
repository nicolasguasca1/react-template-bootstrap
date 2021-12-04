import { ROLES } from "../models/role.model";
import User from "../models/user.model";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user)
      res.status(400).json({
        error: "Usuario ya existe"
      });
    const email = await User.findOne({ email: req.body.email });
    if (email)
      res.status(400).json({
        error: "El email ya existe"
      });

    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const checkRolesExist = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res
          .status(400)
          .send({ message: `Rol ${req.body.roles[i]} no existe` });
      }
    }
  }
  next();
};
