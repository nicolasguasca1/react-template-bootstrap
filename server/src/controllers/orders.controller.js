import Order from "../models/order.model";

export const createOrder = async (req, res) => {
  const {
    product,
    userID,
    description,
    quantity,
    vehicles,
    origin,
    destiny,
    status,
    comments
  } = req.body;
  const newOrder = new Order({
    product,
    userID,
    description,
    quantity,
    vehicles,
    origin,
    destiny,
    status,
    comments
  });
  const orderSaved = await newOrder.save();
  res.status(201).json(orderSaved);
}; // End of createOrder function.

export const getOrders = async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
};

export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.orderId);
  res.status(200).json(order);
};

export const updateOrderById = async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.orderId,
    req.body,
    {
      new: true
    }
  );
  res.status(200).json(updatedOrder);
};

export const deleteOrderById = async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
  res.status(204).json();
};
