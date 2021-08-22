'use strict'
const productController = require('../controllers/products-controller');
const orderController = require('../controllers/orders-controller');


module.exports = function (app) {
    app.get('/products', productController.list);
    //app.get('/products/:productId', productController.read_a_product);
    app.post('/products', [productController.create_a_product]);
    app.get('/products/search', productController.search);
    //app.put('/products/:productId', [productController.update_a_product]);
    //app.delete('/products/:productId', [productController.delete_a_product]);

    // app.get('/yeah', orderController.orders_report)
     app.post('/orders', orderController.create_order);
     app.post('/orders/addproduct', orderController.add_product)
     app.get('/orders/airtable', orderController.publish)

    //SELECT p.id, p.name, SUM(order_items.quantity) as sold_count FROM
    // order_items left join Products p  on p.id = order_items.product_id
    //  group by p.id;
}
