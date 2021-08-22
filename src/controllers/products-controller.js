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

// exports.read_a_product = function (req, res) {
//     ProductModel.findById(req.params.productId).then(
//         (product) => {
//             res.status(200).send(product);
//         }
//     );
// };

// exports.update_a_product = function (req, res) {
//     ProductModel.findOneAndUpdate({_id: req.params.productId}, req.body).then(
//         (updatedProduct) => {
//             return res.status(200).send({id: updatedProduct._id});
//         }
//     );
// };

// exports.delete_a_product = function (req, res) {
//     ProductModel.remove({_id: req.params.productId}).then(
//         () => {
//             return res.status(204).send({});
//         }
//     );
// };
