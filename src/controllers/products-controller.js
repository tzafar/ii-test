'use strict';

const Product = require('../models/product');
const {BadRequest} = require('../errors/error_handler')
const {isEmpty} = require('lodash');

exports.list = async (req, res) => {
    res.status(200).send(await Product.list())
};

exports.create_a_product = async (req, res, next) => {
    try {
        if (isEmpty(req.body)) {
            throw new BadRequest("The request body for product cannot be empty")
        }

        const product = new Product(req.body.name, req.body.price)
        res.status(200).send(await Product.create(product))
    } catch (e) {
        next(e)
    }
};

exports.search = async (req, res, next) => {
    try {
        res.status(200).send(await Product.search(req.query.orderId))
    } catch (e) {
        next(e)
    }
}
