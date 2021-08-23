'use strict';

const Product = require('../models/product');

exports.list = async (req, res) => {
    res.status(200).send(await Product.list())
};

exports.create_a_product = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const product = new Product(req.body.name,req.body.price)
    res.status(200).send(await Product.create(product))
};

exports.search = async (req, res) => {
    res.status(200).send(await Product.search(req.query.orderId))
}
