const express = require('express');
const {
  placeOrder,
  getCustomerOrders,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');
const auth = require('../middleware/auth'); // Ensure you have this middleware for authentication

const router = express.Router();

// Customer: Place an order
router.post('/', auth, placeOrder);

// Customer: Get their orders
router.get('/', auth, getCustomerOrders);

// Admin: Get all orders
router.get('/admin', auth, getAllOrders);

// Admin: Update order status
router.put('/:id/status', auth, updateOrderStatus);

module.exports = router;
