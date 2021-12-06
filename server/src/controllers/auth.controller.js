import User from "../models/user.model";
import jwt from "jsonwebtoken";
import Role from "../models/role.model";

export const signUp = async (req, res) => {
  try {
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
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
