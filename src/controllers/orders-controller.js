'use strict';

const Product = require('../models/order')
const OrderProduct = require('../models/orders_products')
const airtablePublish = require('../export/airtable')

exports.create_order = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const order = new Product(req.body.userId,req.body.status)
    res.status(200).send(await Product.create(order))
};

exports.add_product = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const orderProduct = new OrderProduct(req.body.orderId,req.body.productId, req.body.quantity)
    res.status(200).send(await OrderProduct.create(orderProduct))
};

exports.publish = async (req, res) => {
    let data = await OrderProduct.soldItemsCount();
    airtablePublish(data)
    res.status(200).send()
};
