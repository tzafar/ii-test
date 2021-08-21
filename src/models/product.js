const sql = require("../common/db");

const Product = function(name, price, merchantId = 1, status = 'active') {
    this.name = name
    this.price = price
    this.status = status
    this.merchant_id = merchantId
};

Product.create = (newProduct, next) => {
    sql.query("INSERT INTO Products SET ?", newProduct, (err, res) => {
        if (err) {
            //TODO: throw and error
            console.log(err)
        }
        console.log('product', newProduct)
        next(null, { id: res.insertId, ...newProduct })
    });
};

module.exports = Product
