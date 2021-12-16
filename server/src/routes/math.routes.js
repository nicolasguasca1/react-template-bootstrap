import { Router } from "express";
const router = Router();

import { math } from "../middlewares";

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

router.get("/invoices/:invoiceId", invoicesCtrl.getInvoiceById);

export default router;
