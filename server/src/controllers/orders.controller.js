import Order from "../models/order.model";
import { createInvoice } from "./invoices.controller";

export const createOrder = async (req, res) => {
  const {
    product,
    description,
    quantity,
    vehicles,
    origin,
    destination,
    status,
    comments,
    estimated_cost,
    distance,
    rate,
    fee
  } = req.body;
  const createdBy = req.jwt_payload.user.id;

  const newOrder = new Order({
    product,
    createdBy,
    description,
    quantity,
    vehicles,
    origin,
    destination,
    status,
    comments,
    estimated_cost,
    distance,
    rate,
    fee
  });
  const orderSaved = await newOrder.save();
  console.log(req);
  res.status(201).json(orderSaved);
  // return await res.toArray();
}; // End of createOrder function.

export const getOrders = async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
};

export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.orderId);
  res.status(200).json(order);
};

export const getOrdersByStatus = async (req, res) => {
  const orderStatus = await Order.find({ status: req.params.status });
  res.status(200).json(orderStatus);
};

export const updateOrderById = async (req, res) => {
  // const { fee, distance, estimated_cost } = req.body;
  const { orderId } = req.params;
  const { fee, rate } = req.body;
  const order = await Order.findById(orderId);
  const { estimated_cost, distance } = order;
  const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
    new: true
  });
  if (
    updatedOrder.status !== "Pendiente por despacho" &&
    updatedOrder.status !== "Cancelada"
  ) {
    // middleware para facturar
    createInvoice(rate, distance, estimated_cost, orderId);
  }
  res.status(200).json(updatedOrder);
};

export const deleteOrderById = async (req, res) => {
  const deletedOrder = await Order.findByIdAndUpdate(req.params.orderId, {
    $set: { active: false }
  });
  res.status(204).json();
};
