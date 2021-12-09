import { ROLES } from "../models/role.model";
import User from "../models/user.model";
import {
  ClientError,
  NotFoundError,
  TokenExpiredError,
  UnAuthorizedError
} from "../libs/errors";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) throw new ClientError("Usuario ya existe");
    const email = await User.findOne({ email: req.body.email });
    if (email) throw new ClientError("Email ya existe");
    next();
  } catch (error) {
    next(error);
  }
};

export const checkRolesExist = (req, res, next) => {
  try {
    if (req.body.roles) {
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!ROLES.includes(req.body.roles[i])) {
          throw new ClientError(`Rol ${req.body.roles[i]} no existe`);
        }
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};
