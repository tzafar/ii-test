'use strict';

const Product = require('../models/product');

// exports.list = function (req, res) {
//     Product.list().then(
//         (products) => {
//             res.status(200).send(products)
//         }
//     );
// };

exports.create_a_product = function (req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const p = new Product(req.body.name,req.body.price);

    Product.create(p, function(err, data) {
        if(err) {
            console.log(err)
            res.status(500).send()
        } else {
            res.status(200).send(data)
        }
    })
};

// exports.search = function (req, res) {
//     console.log(req.query)
//     Product.search(req.query.name).then(
//         (products) => {
//             if (products.length === 0) {
//                 res.status(404).send();
//             }
//             res.status(200).send(products);
//         }
//     )
// }

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
