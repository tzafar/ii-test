'use strict'
const productController = require('../controllers/products-controller');


module.exports = function (app) {
    //app.get('/products', productController.list);
    //app.get('/products/:productId', productController.read_a_product);
    app.post('/products', [productController.create_a_product]);
    //app.get('/products/search', [productController.search]);
    //app.put('/products/:productId', [productController.update_a_product]);
    //app.delete('/products/:productId', [productController.delete_a_product]);

    // app.get('/yeah', orderController.orders_report)
    // app.post('/orders', [orderController.save]);
    // app.get('/orders/:orderId', orderController.get_order)
}
