import User from "../models/user.model";
import jwt from "jsonwebtoken";

import Role from "../models/role.model";
import Rate from "../models/rate.model";

export const createUser = async (req, res) => {
  try {
    const {
      username,
      identification_number,
      identification_type,
      email,
      password,
      rate,
      roles
    } = req.body;
    const createdBy = req.jwt_payload.user.id;

    const newUser = new User({
      username,
      identification_number,
      identification_type,
      email,
      createdBy,
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
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: 86400
    }); // 24 hours
    console.log(savedUser);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.status(200).json(user);
};

export const updateUserById = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {
      new: true
    }
  );
  res.status(200).json(updatedUser);
};

export const deleteUserById = async (req, res) => {
  const deletedUser = await User.findByIdAndUpdate(req.params.userId, {
    $set: { active: false }
  });
  res.status(204).json(deletedUser);
};
