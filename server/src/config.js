import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/tripooldb",
  PORT: process.env.PORT || 4000,
  SECRET: process.env.JWT_SECRET || "orders-api"
};
