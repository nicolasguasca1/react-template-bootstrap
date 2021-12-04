import { Router } from "express";
const router = Router();

import * as ordersCtrl from "../controllers/orders.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isInterno],
  ordersCtrl.createOrder
);
router.get("/", ordersCtrl.getOrders);
router.get("/:orderId", authJwt.verifyToken, ordersCtrl.getOrderById);
router.put(
  "/:orderId",
  [authJwt.verifyToken, authJwt.isAdmin],
  ordersCtrl.updateOrderById
);
router.delete(
  "/:orderId",
  [authJwt.verifyToken, authJwt.isAdmin],
  ordersCtrl.deleteOrderById
);

export default router;
