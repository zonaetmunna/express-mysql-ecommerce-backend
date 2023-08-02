const orderModel = require("../model/order.model");


exports.createOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const orderId = await orderModel.create(userId, productId, quantity);
    res.status(201).json({ id: orderId, userId, productId, quantity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.getAll();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await orderModel.getById(orderId);
    res.status(200).json(order);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Add other methods for updating and deleting orders
