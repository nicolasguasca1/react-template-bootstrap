import { Router } from "express";
const router = Router();

import * as ordersCtrl from "../controllers/orders.controller";
import { authJwt, math } from "../middlewares";

router.post(
  "/create",
  [authJwt.verifyToken, math.getRate, math.getCost],
  ordersCtrl.createOrder
);
router.get("/", ordersCtrl.getOrders);
router.get("/:orderId", authJwt.verifyToken, ordersCtrl.getOrderById);

// Solo permitido para admins e internos
router.put(
  "/edit/:orderId",
  [authJwt.verifyToken, authJwt.isAdmin, authJwt.isInterno, math.getRate],
  ordersCtrl.updateOrderById
);
router.delete(
  "/delete/:orderId",
  [authJwt.verifyToken, authJwt.isAdmin],
  ordersCtrl.deleteOrderById
);

export default router;
