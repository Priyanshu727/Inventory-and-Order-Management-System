const Order = require('../models/orderModel');

// Place an order (Customer)
exports.placeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      customer: req.user.id,
      products: req.body.products,
      totalAmount: req.body.totalAmount
    });
    res.status(201).json({ success: true, order });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get customer orders
exports.getCustomerOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user.id });
    res.status(200).json({ success: true, orders });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Admin: Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer');
    res.status(200).json({ success: true, orders });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Admin: Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.status(200).json({ success: true, order });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
