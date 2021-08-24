const mysql = require("mysql");
const {respondWithError} = require('../errors/error_handler')
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

execute = (sql, args) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, args, (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
}

connection.select = async (query) => {
    try {
        return await execute(query)
    } catch (e) {
        console.log('Error: ',e.message)
        respondWithError("Couldn't execute sql query.")
    }
}

connection.insert = async (query, record) => {
    try {
        let newRecord = await execute(query, record)
        return {id: newRecord.insertId, ...record}
    } catch (e) {
        console.log('Error: ',e.message)
        respondWithError("Couldn't execute sql query",)
    }
}

module.exports = connection;
