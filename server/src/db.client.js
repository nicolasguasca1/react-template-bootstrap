import mongoose from "mongoose";
import config from "./config";
import { setUpMongoDBProcessWatchers } from "./watchers";
import colors from "colors";

// // CHANGE TO CLOUD DB SERVER WHEN FINISHED WITH DEVELOPMENT
let mongoDBClient = null;

// const listDatabases = async () => {
//   try {
//     if (mongoDBClient !== null) {
//       const lista = await mongoDBClient.adminCommand({ listDatabases: 1 });
//       console.log("Bases de datos :: disponibles");
//       lista.databases.forEach((db) => console.log(` ==> ${db.name}`));
//     } else {
//       console.log("Cliente MongoDB no conectado");
//     }
//   } catch (error) {
//     console.log(`ERROR: ${error}`); // Se debe fallar en modo seguro, remover la variable error en producción
//   }
// };

// export const connectToMongoDB = async () => {
//   try {
//     mongoDBClient = await mongoose.connect(config.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("INFO: Conexión establecida");
//   } catch (error) {
//     console.log(`ERROR: ${error}`);
//   }
// };

export const dataBase = async () => {
  try {
    const mongoDBClient = await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    if (mongoDBClient !== null) {
      console.log(`Conexión establecida con:`);
    console.log(`${mongoDBClient.connection.host}`.cyan.underline);
      const lista = await mongoDBClient.connections;
      console.log("Colecciones disponibles:");
      lista.forEach((db) => console.log(` ==> ${db.name}`));
    } else {
      console.log("Cliente MongoDB no conectado");
    }
    return {
      mongoDBClient
      // listDatabases
    };
  } catch (error) {
    console.log(`ERROR: ${error.message}`.red.bold);
  }
};

// export { mongoDBClient, listDatabases };
