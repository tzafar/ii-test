const mysql = require("mysql");
const dbConfig = require('./db-cnofig')

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
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
