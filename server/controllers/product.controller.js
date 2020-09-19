const Product = require('../models/product');

const productCtrl = {};

productCtrl.getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.json(products);
};

productCtrl.createProduct = async (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        creationDate: req.body.creationDate,
        price: req.body.price,
        stock: req.body.stock,
        productStatus: req.body.productStatus
        
        
        
    });
    await product.save();
    res.json({status: 'product created'});
};

productCtrl.getProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
};

productCtrl.editProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = {
        name: req.body.name,
        creationDate: req.body.creationDate,
        price: req.body.price,
        stock: req.body.stock,
        productStatus: req.body.productStatus
    };
    await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
    res.json({status: 'Product Updated'});
};

productCtrl.deleteProduct = async (req, res, next) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json({status: 'Product Deleted'});
};

module.exports = productCtrl;