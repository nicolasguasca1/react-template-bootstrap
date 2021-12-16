import express from "express";
import compression from "compression";
import morgan from "morgan";
import pkg from "../package.json";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

import { createRoles, createAdmin, createPlaces, createRates } from "./models";
import ordersRoutes from "./routes/orders.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import placesRoutes from "./routes/places.routes";
import mathRoutes from "./routes/math.routes";
import { dataBase } from "./db.client";
import { guards } from "./middlewares";

const app = express();
(async () => {
  await dataBase();
})();

createRoles();
createPlaces();
createAdmin();
createRates();

// Settings
const PORT = process.env.PORT;
app.set("pkg", pkg);
app.set("port", PORT || 8080);
app.set("json spaces", 4);

// Middlewares
const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(compression());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(guards.notFound);
// app.use(guards.errorHandler);

// welcome routes
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a la API de Tripool",
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});

app.post("/post", (req, res) => {
  console.log("Conexion exitosa con react");
  res.redirect("/");
});

// Routes
app.use("/api/orders", ordersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/places", placesRoutes);

// rutas para facturación
app.use("/api/calc", mathRoutes);

export default app;
