const mysql = require('mysql2');
// const dotenv = require('dotenv');
require('dotenv').config();


const connection = mysql.createConnection({
    host: process.env.DB_HOST, // default localhost
    port: process.env.DB_PORT, //default 3306
    user: process.env.DB_USER, // default empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3307, //default 3306
//     user: 'root', // default empty
//     password: '123456',
//     database: 'hoidanit'
// });
module.exports = connection;