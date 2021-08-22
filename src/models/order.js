const sql = require("../common/db");

const Order = function (userId = 1, status = 'active') {
    this.user_id = userId
    this.status = status
};

Order.create = async (newOrder) => {
    try {
        let addedOrder = await sql.execute("INSERT INTO Orders SET ?", newOrder)
        return {id: addedOrder.insertId, ...newOrder}
    } catch (e) {
        console.log(e)
        //todo: throw error
    }
};

Order.list = async () => {
    try {
        let results = await sql.execute("SELECT * FROM Orders")
        return results
    } catch (e) {
        console.log(e)
        //todo: throw error
    }
};

module.exports = Order
