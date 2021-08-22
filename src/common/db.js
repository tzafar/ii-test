const mysql = require("mysql");
console.log(process.env.DB_HOST)
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if (error) {
        console.log("Error connecting to database.")
        throw error
    }
    console.log("Successfully connected to the database.");
});

connection.execute = (sql, args) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, args, (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
}

module.exports = connection;
