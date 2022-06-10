const express = require('express');
const router = express.Router();

const { ProductModel } = require('../model/Product');


router.get('/api/products', async (req, res) => {
    const products = await ProductModel.find().populate('category');
    res.send(products);
});

router.get('/api/products/:id', async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    res.send(product);
});

router.post('/api/products', async (req, res) => {
    const product = new ProductModel(req.body);
    await product.save();
    res.send(product);
});

router.patch('/api/products/:id', async (req, res) => {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
});

router.delete('/api/products/:id', async (req, res) => {
    var product = await ProductModel.findByIdAndDelete(req.params.id);
    res.send(product);
});


router.post('/api/productFilter', async (req, res) => {
    const { filter } = req.body;
    if(!filter) return res.send([]);
    const productosEncontrados = await ProductModel.find({name: {$regex: filter, $options: 'i'}});
    if(!productosEncontrados.length) return res.send([]);
    const idProductosEncontrados =productosEncontrados.map(x => x._id);
    const productosSugeridos =  await ProductModel.find({category:productosEncontrados[0].category},['name']).where('_id').nin(idProductosEncontrados).limit(2);
    res.send({encontrados:productosEncontrados,sugeridos:productosSugeridos});
});

module.exports = router;
