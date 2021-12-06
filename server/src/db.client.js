// module.exports = {
//   URL: process.env.DATABASE_URL || "mongodb://localhost/test"
// };
import mongoose from "mongoose";
import config from "./config";
import { setUpMongoDBProcessWatchers } from "./watchers";

// CHANGE TO CLOUD DB SERVER WHEN FINISHED WITH DEVELOPMENT
let mongoDBClient = null;

const listDatabases = async () => {
  try {
    if (mongoDBClient !== null) {
      const lista = await mongoDBClient.adminCommand({ listDatabases: 1 });
      console.log("Bases de datos :: disponibles");
      lista.databases.forEach((db) => console.log(` ==> ${db.name}`));
    } else {
      console.log("Cliente MongoDB no conectado");
    }
  } catch (error) {
    console.log(`ERROR: ${error}`); // Se debe fallar en modo seguro, remover la variable error en producción
  }
};

// mongoose
//   .connect(config.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then((db) => console.log("DB is connected"))
//   .catch((err) => console.log(err));

export const connectToMongoDB = async () => {
  try {
    mongoDBClient = await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("INFO: Conexión establecida");
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export { mongoDBClient, listDatabases };
