var Product = require('../models/product').Product;

exports.list = function(req, res) {
    Product.find({}, function(error, products) {
        if (error)
            res.send(error);

        res.json(200, products);
    });
};

exports.create = function(req, res) {
    var product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.price = req.body.price;
    product.quantityOnHand = req.body.quantityOnHand;
    product.image = req.body.image;

    product.save(function(error) {
        if (error)
            res.send(error);

        res.json(201, product);
    });
};
