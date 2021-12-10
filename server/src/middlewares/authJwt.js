import jwt from "jsonwebtoken";
import User from "../models/user.model";
import Role from "../models/role.model";
import {
  ClientError,
  NotFoundError,
  TokenExpiredError,
  UnAuthorizedError
} from "../libs/errors";

// export const verifyToken = async (req, res, next) => {
//   const token = req.headers["x-access-token"];
//   if (!token)
//     return res
//       .status(403)
//       .send({ auth: false, message: "No se ha introducido un token." });
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     const user = await User.findById(req.userId, { password: 0 });

//     // Se imprime por consola el usuario que genero la petición!
//     console.log(user);

//     if (!user)
//       return res
//         .status(404)
//         .send({ auth: false, message: "Usuario no encontrado." });
//     next();
//   } catch (error) {
//     return res.status(401).send({ auth: false, message: "No autorizado" });
//   }
// };

// REESCRITO ABAJO

export const verifyToken = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization)
    return res.status(403).send({
      auth: false,
      message: "No se ha introducido un token de autorización."
    });
  try {
    const token = authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.jwt_payload = payload;
    // next();
  } catch (error) {
    // throw new UnAuthorizedError("Falló la verificación del token");
    next(error);
  }
  return next();
};

//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (user) throw new ClientError("Usuario ya existe");
//     const email = await User.findOne({ email: req.body.email });
//     if (email) throw new ClientError("Email ya existe");
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// export const getTokenPair = async (req, res, next) => {
// const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
//     expiresIn: 86400
//   });
//   res.json({ token });
// } catch (error) {
//   res.status(400).json({ message: error.message });
// }

// REESCRITO ABAJO
export const getTokenPair = async (user) => {
  const token = await jwt.sign(
    {
      user: { id: user._id, tokenVersion: user.tokenVersion, email: user.email }
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15m"
    }
  );

  const refreshToken = await jwt.sign(
    {
      user: { id: user._id, tokenVersion: user.tokenVersion, email: user.email }
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "7d"
    }
  );

  return { token, refreshToken };
};

export const isInterno = async (req, res, next) => {
  try {
    const user = await User.findById(req.jwt_payload.user.id);
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
    const user = await User.findById(req.jwt_payload.user.id);
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

export const loginUser = async (payload) => {
  const userFound = await User.findOne({ email: payload.email }).populate(
    "roles"
  );
  if (!userFound) throw new NotFoundError("Usuario no encontrado");

  const matchPassword = await User.comparePassword(
    payload.password,
    userFound.password
  );
  if (!matchPassword) throw new ClientError("Contraseña inválida");
  return await getTokenPair(userFound);
};

// export const logoutUser = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.jwt_payload.user.id);
//     user.tokenVersion = user.tokenVersion + 1;
//     await user.save();
//     return res.status(200).json({ auth: false, message: "Sesión cerrada" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({ message: error });
//   }
// };

export const refreshAccessToken = async (refreshToken) => {
  if (!refreshToken)
    throw new NotFoundError("No se ha encontrado el refresh token.");
  const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  const user = await User.findById(payload.user.id, { password: 0 });

  //     const user = await User.findById(req.userId, { password: 0 });

  if (!user) throw new NotFoundError("No se ha encontrado el usuario.");
  if (user.tokenVersion !== payload.user.tokenVersion)
    throw new TokenExpiredError("Este token no es válido");
  return await getTokenPair(user);
};

export const increaseVersion = async (refreshToken) => {
  if (!refreshToken)
    throw new NotFoundError("No se encontro el token de refresh.");

  const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  let user = await User.findById(payload.user.id);
  if (!user) throw new NotFoundError("No se encontro el usuario.");

  await User.updateOne(
    { _id: user.id },
    { tokenVersion: user.tokenVersion + 1 }
  );

  user = await User.findById(user._id);

  return await getTokenPair(user);
};
