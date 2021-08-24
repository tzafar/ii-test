'use strict';

const Product = require('../models/order')
const OrderProduct = require('../models/orders_products')
const airtablePublish = require('../export/airtable')
const {BadRequest} = require('../errors/error_handler')
const {isEmpty} = require('lodash')

exports.create_order = async (req, res, next) => {
    try {
        if (isEmpty(req.body)) {
            throw new BadRequest("Request body for Order cannot be empty")
        }

        const order = new Product(req.body.userId, req.body.status)
        res.status(200).send(await Product.create(order))
    } catch (e) {
        next(e)
    }
};

exports.add_product = async (req, res, next) => {
    try {
        if (isEmpty(req.body)) {
            throw new BadRequest("Request body for adding a product to an order cannot be empty")
        }

        const orderProduct = new OrderProduct(req.body.orderId, req.body.productId, req.body.quantity)
        res.status(200).send(await OrderProduct.create(orderProduct))
    } catch (e) {
        next(e)
    }
};

exports.publish = async (req, res, next) => {
    try {
        let data = await OrderProduct.soldItemsCount();
        airtablePublish(data)
        res.status(200).send()
    } catch (e) {
        next(e)
    }
}
