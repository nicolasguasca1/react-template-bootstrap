import User from "../models/user.model";

export const createUser = async (req, res) => {
  res.json("creating user");
};

export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};
