const express = require('express');
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const auth = require('../middleware/auth');

const router = express.Router();

// Protect the product routes with authentication
router.post('/', auth, createProduct); // Create product
router.get('/', getProducts); // Get all products
router.put('/:id', auth, updateProduct); // Update product
router.delete('/:id', auth, deleteProduct); // Delete product

module.exports = router;
