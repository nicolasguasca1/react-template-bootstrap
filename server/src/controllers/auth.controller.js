import User from "../models/user.model";
import jwt from "jsonwebtoken";
import Role from "../models/role.model";
import Rate from "../models/rate.model";
import { loginUser } from "../middlewares/authJwt";

export const signUp = async (req, res) => {
  try {
    const {
      email,
      identification_number,
      identification_type,
      username,
      password,
      roles
    } = req.body;

    const newUser = new User({
      email,
      identification_number,
      identification_type,
      username,
      password: await User.encryptPassword(password)
    });

    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "cliente" });
      newUser.roles = [role._id];
    }
    if (req.body.rate) {
      const foundRate = await Rate.find({ name: { $in: rate } });
      newUser.rate = foundRate._id;
    } else {
      const rate = await Rate.findOne({ name: "Plena" });
      newUser.rate = rate._id;
    }
    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: 86400
    }); // 24 hours
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({
      message: `El registro del usuario fallo por lo siguiente: ${error.message} `
    });
  }
};

// export const signIn = async (req, res) => {
//   try {
//     const userFound = await User.findOne({ email: req.body.email }).populate(
//       "roles"
//     );
//     if (!userFound)
//       return res.status(404).json({ message: "Usuario no encontrado" });

//     const matchPassword = await User.comparePassword(
//       req.body.password,
//       userFound.password
//     );
//     if (!matchPassword)
//       return res
//         .status(401)
//         .json({ token: null, message: "Contraseña incorrecta" });
//     const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
//       expiresIn: 86400
//     });
//     res.json({ token });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// REESCRIBIENDO

export const signIn = async (req, res, next) => {
  try {
    // const result = await loginUser(req.body);
    // console.log(result);
    const { token, refreshToken } = await loginUser(req.body);
    res.cookie("refreshToken", refreshToken, { httpOnly: true }).json({
      message: `El usuario ha iniciado sesión`,
      token
    });
  } catch (error) {
    next(error);
  }
};
