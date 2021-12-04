import User from "../models/user.model";
import jwt from "jsonwebtoken";
import Role from "../models/role.model";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  });

  if (req.body.roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "cliente" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
    expiresIn: 86400
  }); // 24 hours
  console.log(savedUser);
  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound)
    return res.status(404).json({ message: "Usuario no encontrado" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );
  if (!matchPassword)
    return res
      .status(401)
      .json({ token: null, message: "Contraseña incorrecta" });
  const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
    expiresIn: 86400
  });
  res.json({ token });

  // const userFound = await User.findOne({ email: req.body.email }).populate(
  //   "roles"
  // );
  // (err, userFound) => {
  //   if (err) return res.status(500).send({ message: "Error en la petición" });
  //   if (!userFound)
  //     return res.status(404).send({ message: "El usuario no existe" });
  //   if (User.comparePassword(req.body.password, userFound.password)) {
  //     console.log(userFound);
  //     return res.status(200).json({ token: "" });
  //   } else {
  //     const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
  //       expiresIn: 86400
  //     }); // 24 hours
  //     res.status(200).json({ token });
  //   }
  // };
};
