import { Router } from "express";
const router = Router();

import * as ordersCtrl from "../controllers/orders.controller";
import { authJwt } from "../middlewares";

// rutas cambiadas, puede necesitar config

router.post(
  "/create",
  [authJwt.verifyToken, authJwt.isInterno],
  ordersCtrl.createOrder
);
router.get("/", ordersCtrl.getOrders);
router.get("/:orderId", authJwt.verifyToken, ordersCtrl.getOrderById);
router.put(
  "/edit/:orderId",
  [authJwt.verifyToken, authJwt.isAdmin],
  ordersCtrl.updateOrderById
);
router.delete(
  "/delete/:orderId",
  [authJwt.verifyToken, authJwt.isAdmin],
  ordersCtrl.deleteOrderById
);

export default router;
