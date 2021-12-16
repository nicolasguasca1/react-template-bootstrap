import { Router } from "express";
const router = Router();

import { math } from "../middlewares";

// Usar controladores para crear nuevas facturas y obtener las facturas
import * as placesCtrl from "../controllers/places.controller";
import * as invoicesCtrl from "../controllers/invoices.controller";

// rutas para hacer el cálculo de las órdenes y generar una factura y obtener facturas

router.post("/cost", [math.getCost]);

router.post(
  "/newinvoice",
  //   [authJwt.verifyToken, authJwt.isInterno],
  invoicesCtrl.createInvoice
);
router.get("/invoices", invoicesCtrl.getInvoices);
// router.get("/:orderId", authJwt.verifyToken, ordersCtrl.getOrderById);
// router.put(
//     "/edit/:orderId",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     ordersCtrl.updateOrderById
// );
// router.delete(
//     "/delete/:orderId",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     ordersCtrl.deleteOrderById
// );

export default router;
