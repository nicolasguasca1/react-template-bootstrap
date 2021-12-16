//  AQUI VAN LO MÉTODOS PARA ESCRIBIR EN BASE DE DATOS LAS FACTURAS CREADAS

import Invoice from "../models/invoice.model";
import Rate from "../models/rate.model";
import jwt from "jsonwebtoken";

export const getCost = async (req, res) => {
  const { distance, price } = req.body;
  res.json({
    operation: "Cálculo del costo de transporte",
    result: distance * price
  });
};

export const getInvoices = async (req, res) => {
  const invoices = await Invoice.find({});
  res.json(invoices);
};

export const getInvoiceById = async (req, res) => {
  const invoice = await Invoice.findById(req.params.invoiceId);
  res.status(200).json(invoice);
};

export const createInvoice = async (
  rate,
  distance,
  estimated_cost,
  orderId
) => {
  // const { fee, distance, estimated_cost } = req.body;
  // const { orderId } = req.params;
  // console.log(
  //   `Los elementos de la factura son fee distance, estimated_cost y orderID ${fee}, ${distance}, ${estimated_cost}, ${orderId}`
  // );
  const newInvoice = new Invoice({
    rate,
    distance,
    estimated_cost,
    orderId
  });
  console.log(`This is the new invoice: ${newInvoice}`);

  const savedInvoice = await newInvoice.save();

  console.log(`This is the savedinvoice: ${savedInvoice}`);
  return savedInvoice;
};
