const mysql = require('mysql2/promise');
require('dotenv').config();


const connection = mysql.createPool({
    host: 'db-processo-seletivo-escribo.csy0cl9wmuzm.sa-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'rootroot',
    database: 'escriboBanco'
});

module.exports = connection;