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

export const createInvoice = async (fee, distance, estimated_cost, orderId) => {
  // const { fee, distance, estimated_cost } = req.body;
  // const { orderId } = req.params;
  console.log(
    `Llegué a definir ${fee}, ${distance}, ${estimated_cost}, ${orderId}`
  );
  const newInvoice = new Invoice({
    fee,
    distance,
    estimated_cost,
    orderId
  });
  console.log(newInvoice);
  if (fee) {
    const foundRate = await Rate.find({ fee: { $in: fee } });
    newInvoice.rate = foundRate._id;
    console.log(foundRate);
  } else {
    const rate = await Rate.findOne({ name: "Plena" });
    newInvoice.rate = rate._id;
    console.log(rate);
  }
  // if (req.body.roles) {
  //   const foundRoles = await Role.find({ name: { $in: roles } });
  //   newUser.roles = foundRoles.map((role) => role._id);
  // } else {
  //   const role = await Role.findOne({ name: "cliente" });
  //   newUser.roles = [role._id];
  // }
  const savedInvoice = await newInvoice.save();
  // const token = jwt.sign({ id: savedInvoice._id }, process.env.JWT_SECRET, {
  //   expiresIn: 86400
  // }); // 24 hours
  console.log(savedInvoice);
  return savedInvoice;
};
