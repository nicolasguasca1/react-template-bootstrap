// module.exports = {
//   URL: process.env.DATABASE_URL || "mongodb://localhost/test"
// };
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/tripooldb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log("DB connected"))
  .catch((err) => console.log(err));
