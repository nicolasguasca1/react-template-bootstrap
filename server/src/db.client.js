import mongoose from "mongoose";
import config from "./config";
import { setUpMongoDBProcessWatchers } from "./watchers";
import colors from "colors";

// // CHANGE TO CLOUD DB SERVER WHEN FINISHED WITH DEVELOPMENT
let mongoDBClient = null;

export const dataBase = async () => {
  try {
    const mongoDBClient = await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    if (mongoDBClient !== null) {
      console.log(`Conexión establecida con:`);
      console.log(` ==> ${mongoDBClient.connection.host}`.cyan.underline);
      const lista = await mongoDBClient.connections;
      console.log("Colecciones disponibles:");
      lista.forEach((db) => console.log(` ==> ${db.name}`));
    }
  } catch (e) {
    console.log("Cliente MongoDB no se pudo establecer.");
    console.log(`ERROR: ${e.message}`.red.bold);
    setUpMongoDBProcessWatchers();
  } finally {
    return mongoDBClient;
  }
};

// export { mongoDBClient, listDatabases };
