const mongoose = require('mongoose');

const ProductCategoryModel = mongoose.model('productcategories', {

    name: {
        type: String,
        required: true
    }
});

module.exports = {ProductCategoryModel};