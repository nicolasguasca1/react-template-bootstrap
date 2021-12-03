// module.exports = {
//   URL: process.env.DATABASE_URL || "mongodb://localhost/test"
// };
import mongoose from "mongoose";
import config from "./config";

// CHANGE TO CLOUD DB SERVER WHEN FINISHED WITH DEVELOPMENT
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));
