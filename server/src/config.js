import axios from "axios";
// import TokenService from "./services/token.service";

import { config } from "dotenv";
// import { request } from "express";
import { authJwt } from "./middlewares";
config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/tripooldb";
export const PORT = process.env.PORT || 4000;
export const SECRET = process.env.JWT_SECRET || "orders-api";
export const REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || "orders-api-refresh";
export const HEADERS = {
  "Content-Type": "application/json"
};

// Obtener instancia de axios
export const tripoolClient = axios.create({
  baseURL: { MONGODB_URI },
  timeout: 1000,
  headers: HEADERS
});

// Insert the token in the header but not needed for the moment
// tripoolClient.interceptors.request.use(authJwt.verifyToken);

tripoolClient.interceptors.response.use(authJwt.refreshAccessToken);

tripoolClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/api/auth/signin" && err.response) {
      // Access Token was expired
      if (err.response.status === 500 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          authJwt.refreshAccessToken();
          return tripoolClient(originalConfig);
        } catch (error) {
          console.log(error);
          return err;
        }
      }
    }
  }
);
