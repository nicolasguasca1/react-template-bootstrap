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
    newUser.roles = foundRoles.map((role) => role._id.toString());
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
  res.json("signin");
};
