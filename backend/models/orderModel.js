const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }, quantity: Number
    }],
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending'
    },
  totalAmount: Number
});

module.exports = mongoose.model('Order', orderSchema);
