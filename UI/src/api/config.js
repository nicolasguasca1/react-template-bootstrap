import { config } from "dotenv";
config();

export const PROTOCOL = process.env.PROTOCOL || "http";
export const API_DB = process.env.API_DB || "http://localhost:8080";
