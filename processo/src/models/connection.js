const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'meu_host',
    user: 'meu_user',
    password: 'minha_senha',
    database: 'meu_banco',
});

module.exports = connection;