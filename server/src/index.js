import app from "./app";
// import "./db.client";
import "dotenv/config";

// Initialize the app

app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
