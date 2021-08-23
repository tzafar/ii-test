const sql = require("../common/db");

const Product = function (name, price, merchantId = 1, status = 'active') {
    this.name = name
    this.price = price
    this.status = status
    this.merchant_id = merchantId
};

Product.create = async (newProduct) => {
        let addedProduct = await sql.insert("INSERT INTO Products SET ?", newProduct)
        return {id: addedProduct.insertId, ...newProduct}
};

Product.list = async () => {
    let results = await sql.select("SELECT * FROM Products")
    return results
};

Product.search = async (orderId) => {
    let results = await sql.select("SELECT * FROM Products left join order_items on Products.id = order_items.product_id where order_items.order_id = " + orderId)
    return results.map(i => {
        return {
            id: i.product_id,
            name: i.name,
            price: i.price
        }
    })
};

module.exports = Product
