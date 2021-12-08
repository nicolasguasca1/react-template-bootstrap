// THIS FILE IS CONTAINING THE INITIAL SETUP OF THE DATABASE IN TERMS OF ROLES AND USERS

import Role from "./role.model";
import User from "./user.model";

import bcrypt from "bcryptjs";

export const createRoles = async () => {
  try {
    //  Count documents
    const count = await Role.estimatedDocumentCount();

    // Check for existing roles
    if (count > 0) return;

    // Create default roles
    const values = await Promise.all([
      new Role({ name: "cliente" }).save(),
      new Role({ name: "admin" }).save(),
      new Role({ name: "interno" }).save()
    ]);
    console.log(values);
  } catch (error) {
    throw error;
  }
};

export const createAdmin = async () => {
  // Check for existing admin user
  const user = await User.findOne({ email: "admin@localhost" });

  // get roles _id
  const roles = await Role.find({ name: { $in: ["admin", "interno"] } });

  if (!user) {
    // create a new admin user
    await User.create({
      username: "Admin",
      email: "admin@localhost",
      password: bcrypt.hashSync("admin", 10),
      roles: roles
    });
    console.log("Administrador creado");
  }
};
