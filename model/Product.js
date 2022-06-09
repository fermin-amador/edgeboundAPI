const mongoose = require('mongoose');


const ProductModel = mongoose.model('products', {
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    }
});

module.exports = { ProductModel };