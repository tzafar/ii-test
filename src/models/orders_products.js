'use strict'

const sql = require("../common/db");

const OrderProduct = function (orderId, productId, quantity = 1) {
    this.order_id = orderId
    this.product_id = productId
    this.quantity = quantity
};

OrderProduct.create = async (newOrderProduct) => {
    return await sql.insert("INSERT INTO order_items SET ?", newOrderProduct)
};

OrderProduct.soldItemsCount = async () => {
    return await sql.select("SELECT p.id as Product_id, p.name as Product_name,  SUM(order_items.quantity) as Sold_count FROM order_items left join Products p  on p.id = order_items.product_id group by p.id;")
}

module.exports = OrderProduct
