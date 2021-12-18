import * as CONFIG from "./config";
import axios from "axios";

export const HEADERS = {
  "Content-Type": "application/json"
};
// Obtener rutas de forma dinámica, ya incluye el /
const getURL = (param = null) => {
  if (!Boolean(param)) throw new Error("La ruta es obligatoria");
  else return new URL(`${CONFIG.API_DB}${param}`);
};

// Envoltorio para ejecutar rutinas de la API. Si se ingresan valores hacer post, sino hacer get.

export const call = async (route, params) => {
  try {
    const url = getURL(route);
    if (route.includes("edit")) {
      const response = await axios.put(url, params);
      return response.data;
    } else if (params === null) {
      const response = await axios.get(url);
      return response.data;
    } else {
      const response = await axios.post(url, params);
      console.log(response);
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
