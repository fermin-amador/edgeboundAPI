const express = require('express');
const router = express.Router();

const { ProductCategoryModel } = require('../model/ProductCategory');

router.get('/api/productcategory', async (req, res) => {
    const productCategory = await ProductCategoryModel.find();
    res.send(productCategory);
});

router.get('/api/productcategory/:id', async (req, res) => {
    const productCategory = await ProductCategoryModel.findById(req.params.id);
    res.send(productCategory);
});

router.post('/api/productcategory', async (req, res) => {
    const productCategory = new ProductCategoryModel(req.body);
    await productCategory.save();
    res.send(productCategory);
});

router.patch('/api/productcategory/:id', async (req, res) => {
    const productCategory = await ProductCategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(productCategory);
});

router.delete('/api/productcategory/:id', async (req, res) => {
    var productCategory = await ProductCategoryModel.findByIdAndDelete(req.params.id);
    res.send(productCategory);
});

module.exports = router;
