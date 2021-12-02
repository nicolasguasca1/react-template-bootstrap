import { Router } from "express";
import * as ordersCtrl from "../controllers/orders.controller";
const router = Router();

router.post("/", ordersCtrl.createOrder);
router.get("/", ordersCtrl.getOrders);
router.get("/:orderId", ordersCtrl.getOrderById);
router.put("/:orderId", ordersCtrl.updateOrderById);
router.delete("/", ordersCtrl.deleteOrderById);

export default router;
