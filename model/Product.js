const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productcategory',
        required: true
    }
   
});
ProductSchema.set('toJSON', {transform: (doc, returnObject) => {
    delete returnObject.__v
}});


const ProductModel = mongoose.model('products',ProductSchema)

module.exports = { ProductModel };