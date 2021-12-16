// THIS FILE IS CONTAINING THE INITIAL SETUP OF THE DATABASE IN TERMS OF ROLES AND USERS

import Role from "./role.model";
import Rate from "./rate.model";
import Place from "./place.model";
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

export const createRates = async () => {
  try {
    //  Count documents
    const count = await Rate.estimatedDocumentCount();

    // Check for existing roles
    if (count > 0) return;

    // Create default roles
    const values = await Promise.all([
      new Rate({ name: "Plena", fee: 15000, discount: 0 }).save(),
      new Rate({ name: "Reducida", fee: 15000, discount: 0.3 }).save(),
      new Rate({ name: "Preferencial", fee: 5000, discount: 0 }).save()
    ]);
    console.log(values);
  } catch (error) {
    throw error;
  }
};

export const createPlaces = async () => {
  try {
    //  Count documents
    const count = await Place.estimatedDocumentCount();

    // Check for existing places
    if (count > 0) return;

    // Create default places
    const values = await Promise.all([
      new Place({ name: "hospital regional", dist_to_warehouse: 100 }).save(),
      new Place({ name: "hospital", dist_to_warehouse: 20 }).save(),
      new Place({
        name: "centro comercial del sur",
        dist_to_warehouse: 40
      }).save(),
      new Place({ name: "complejo industrial", dist_to_warehouse: 200 }).save(),
      new Place({ name: "conjunto cerrado", dist_to_warehouse: 150 }).save(),
      new Place({ name: "alcaldía", dist_to_warehouse: 10 }).save(),
      new Place({
        name: "centro de convenciones",
        dist_to_warehouse: 18
      }).save(),
      new Place({ name: "mercado de frutas", dist_to_warehouse: 69 }).save(),
      new Place({
        name: "laboratorio de materiales",
        dist_to_warehouse: 47
      }).save(),
      new Place({
        name: "ensambladora municipal",
        dist_to_warehouse: 138
      }).save(),
      new Place({ name: "estación de trenes", dist_to_warehouse: 78 }).save(),
      new Place({
        name: "represa departamental",
        dist_to_warehouse: 200
      }).save(),
      new Place({ name: "teatro central", dist_to_warehouse: 140 }).save(),
      new Place({ name: "parroquia principal", dist_to_warehouse: 40 }).save(),
      new Place({ name: "aeropuerto regional", dist_to_warehouse: 30 }).save(),
      new Place({
        name: "centro de atención al cuidadano",
        dist_to_warehouse: 70
      }).save(),
      new Place({ name: "museo de artesanías", dist_to_warehouse: 60 }).save(),
      new Place({
        name: "universidad distrital",
        dist_to_warehouse: 25
      }).save(),
      new Place({ name: "ciudadela", dist_to_warehouse: 5 }).save(),
      new Place({ name: "cinemateca distrital", dist_to_warehouse: 89 }).save()
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
