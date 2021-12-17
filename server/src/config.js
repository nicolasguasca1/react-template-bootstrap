import axios from "axios";
import { config } from "dotenv";
config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/tripooldb";
export const PORT = process.env.PORT || 4000;
export const SECRET = process.env.JWT_SECRET || "orders-api";
export const REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || "orders-api-refresh";
export const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

// Obtener instancia de axios
const tripoolClient = axios.create({
  baseURL: { MONGODB_URI },
  timeout: 1000,
  headers: HEADERS
});

// Insert the token in the header
tripoolClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Obtener rutas de forma dinámica, ya incluye el /
const getURL = (param = null) => {
  if (!Boolean(param)) throw new Error("La ruta es obligatoria");
  else return new url(`${MONGODB_URI}/${param}`);
};

// Envoltorio para ejecutar rutinas de la API. Si se ingresan valores hacer post, sino hacer get.

export const apiCall = async (route, { params }) => {
  try {
    const url = getURL(route);
    if (route.includes("edit")) {
      const response = await tripoolClient.put(url, params);
      return response.data;
    } else if (params == null && headers === null) {
      const response = await tripoolClient.get(url);
      return response.data;
    } else {
      const response = await tripoolClient.post(url, params);
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
