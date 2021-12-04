import app from "./app";
import "./db.config";
import "dotenv/config";

// // set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
