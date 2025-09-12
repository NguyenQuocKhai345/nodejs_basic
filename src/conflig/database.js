const mysql = require('mysql2');
// const dotenv = require('dotenv');
require('dotenv').config();

// connect cach thong thuong ( ko dung dc cho project lon)
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST, // default localhost
//     port: process.env.DB_PORT, //default 3306
//     user: process.env.DB_USER, // default empty
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

//connect voi pool(dung cho project lon)
const connection = mysql.createPool({
    host: process.env.DB_HOST, // default localhost
    port: process.env.DB_PORT, //default 3306
    user: process.env.DB_USER, // default empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;