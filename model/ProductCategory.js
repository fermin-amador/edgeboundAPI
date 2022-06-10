const mongoose = require('mongoose');

const ProductCategorySchema = mongoose.Schema( {

    name: {
        type: String,
        required: true
    }
});
ProductCategorySchema.set('toJSON', {transform: (doc, returnObject) => {
    delete returnObject.__v
}});

const ProductCategoryModel = mongoose.model('productcategory', ProductCategorySchema)

module.exports = {ProductCategoryModel};