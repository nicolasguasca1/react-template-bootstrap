// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

// const db = {};

// db.mongoose = mongoose;

// db.user = require("./user.model");
// db.role = require("./role.model");

// db.ROLES = ["cliente", "admin", "interno"];

// module.exports = db;

import Role from "./role.model";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;

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
