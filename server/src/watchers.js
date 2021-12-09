import { mongoDBClient } from "./db.client";

const gracefulShutdown = () => {
  console.log("-----Conexión con MongoDB cerrada-----");
  mongoDBClient.close();
};

export const setUpMongoDBProcessWatchers = () => {
  process.on("exit", gracefulShutdown);
  //  Se interceptan señales de terminación del sistema operativo
  process.on("SIGINT", gracefulShutdown);
  process.on("SIGTERM", gracefulShutdown);
  process.on("SIGKILL", gracefulShutdown);
  //   Exception no controlada
  process.on("uncaughtException", gracefulShutdown);
};
