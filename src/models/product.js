const sql = require("../common/db");

const Product = function (name, price, merchantId = 1, status = 'active') {
    this.name = name
    this.price = price
    this.status = status
    this.merchant_id = merchantId
};

Product.create = async (newProduct, next) => {
    try {
        let addedProduct = await sql.execute("INSERT INTO Products SET ?", newProduct)
        return {id: addedProduct.insertId, ...newProduct}
    } catch (e) {
        console.log(e)
        //todo: throw error
    }
};

Product.list = async () => {
    try {
        let results = await sql.execute("SELECT * FROM Products")
        return results
    } catch (e) {
        console.log(e)
        //todo: throw error
    }
};

Product.search = async (orderId) => {
    try {
        let results = await sql.execute("SELECT * FROM Products left join order_items on Products.id = order_items.product_id where order_items.order_id = " + orderId)
        return results.map(i => {
            return {
                id: i.product_id,
                name: i.name,
                price: i.price
            }
        })
    } catch (e) {
        console.log(e)
        //todo: throw error
    }
};

module.exports = Product
