'use strict'
const productController = require('../controllers/products-controller');
const orderController = require('../controllers/orders-controller');


module.exports = function (app) {
    app.get('/products', productController.list);
    app.post('/products', [productController.create_a_product]);
    app.get('/products/search', productController.search);

     app.post('/orders', orderController.create_order);
     app.post('/orders/addproduct', orderController.add_product)
     app.get('/orders/airtable', orderController.publish)
}
