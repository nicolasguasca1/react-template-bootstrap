import User from "../models/user.model";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  });
  const savedUser = newUser.save();

  const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
    expiresIn: 86400
  }); // 24 hours
  console.log(newUser);
  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  res.json("signin");
};
