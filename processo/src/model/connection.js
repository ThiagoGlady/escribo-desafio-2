const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'escribo'
});

module.exports = connection;