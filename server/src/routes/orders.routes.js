import { Router } from "express";
const router = Router();

import * as ordersCtrl from "../controllers/orders.controller";
import { verifyToken } from "../middlewares";

router.post("/", verifyToken, ordersCtrl.createOrder);
router.get("/", ordersCtrl.getOrders);
router.get("/:orderId", verifyToken, ordersCtrl.getOrderById);
router.put("/:orderId", verifyToken, ordersCtrl.updateOrderById);
router.delete("/:orderId", verifyToken, ordersCtrl.deleteOrderById);

export default router;
