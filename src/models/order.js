const sql = require("../common/db");

const Order = function (userId = 1, status = 'active') {
    this.user_id = userId
    this.status = status
};

Order.create = async (newOrder) => {
    let addedOrder = await sql.insert("INSERT INTO Orders SET ?", newOrder)
    return {id: addedOrder.insertId, ...newOrder}
};

Order.list = async () => {
    return await sql.select("SELECT * FROM Orders")
};

module.exports = Order
