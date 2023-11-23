const connection = require('./connection');
const getData = require('../helpers/getData');
const makeTelefoneQuery = require('../helpers/makeTelefoneQuery');

const getUsers = async () => {
    await connection.execute(
        `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(50),
            email VARCHAR(100) UNIQUE,
            senha VARCHAR(255),
            data_criacao VARCHAR(255)
        );`
    );

    await connection.execute(
        `CREATE TABLE IF NOT EXISTS phonenumbers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            num VARCHAR(20),
            ddd VARCHAR(3),
            FOREIGN KEY (user_id) REFERENCES users(id)
        );`
    );

    const [rows] = await connection.execute('SELECT * FROM users');

    return rows;
};

const createUser = async (user) => {
    const {nome, email, senha, telefones} = user;

    if (!nome || !email || !senha) {
        return [{
            mensagem: 'Dados incompletos e/ou inválidos',
        }]
    }

    if (typeof nome != 'string' || typeof email != 'string' || typeof senha != 'string') {
        return [{
            mensagem: 'Algum dado não é uma string',
        }]
    }

    await connection.execute(
        `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(50),
            email VARCHAR(100) UNIQUE,
            senha VARCHAR(255),
            data_criacao VARCHAR(255)
        );`
    );

    await connection.execute(
        `CREATE TABLE IF NOT EXISTS phonenumbers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            num VARCHAR(20),
            ddd VARCHAR(3),
            FOREIGN KEY (user_id) REFERENCES users(id)
        );`
    );

    if (!(await verifyEmail(user))) {
        return [{
            mensagem: "Email já existente" 
        }]
    };
    
    const dateUTC = getData();

    const createdUser = await connection.execute(
        'INSERT INTO users (nome, email, senha, data_criacao) VALUES (?, ?, ?, ?)',
        [nome, email, senha, dateUTC]
    );

    if (!telefones) return createdUser;

    createdUser[0].data_criacao = dateUTC;

    const userId = createdUser[0].insertId;
    const numbersToPut = makeTelefoneQuery(telefones, userId);

    await connection.execute(
        `INSERT INTO phonenumbers (user_id, num, ddd) VALUES ${numbersToPut}`
    );

    return createdUser;
};

const verifyEmail = async (user) => {
    const {email} = user;

    const [[emailTotal]] = await connection.execute(
        `SELECT COUNT(*) AS total FROM users WHERE email = '${email}';`
    );

    return emailTotal.total == 0;
};

const login = async (user) => {
    const {email, senha} = user;

    if (!email || !senha) {
        return [{
            mensagem: 'Dados incompletos e/ou inválidos'
        }]
    }
    console.log(typeof email);
    if (typeof email != 'string' || typeof senha != 'string') {
        return [{
            mensagem: 'Algum dado não é uma string',
        }]
    }

    await connection.execute(
        `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(50),
            email VARCHAR(100) UNIQUE,
            senha VARCHAR(255),
            data_criacao VARCHAR(255)
        );`
    );

    await connection.execute(
        `CREATE TABLE IF NOT EXISTS phonenumbers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            num VARCHAR(20),
            ddd VARCHAR(3),
            FOREIGN KEY (user_id) REFERENCES users(id)
        );`
    );

    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length == 0) {
        return [{
            mensagem: 'Usuário e/ou senha inválidos'
        }]
    }

    if (rows[0].senha != senha) {
        return [{
            mensagem: 'Usuário e/ou senha inválidos'
        }]
    }

    return rows;
};

const getUser = async (email) => {
    await connection.execute(
        `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(50),
            email VARCHAR(100) UNIQUE,
            senha VARCHAR(255),
            data_criacao VARCHAR(255)
        );`
    );

    await connection.execute(
        `CREATE TABLE IF NOT EXISTS phonenumbers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            num VARCHAR(20),
            ddd VARCHAR(3),
            FOREIGN KEY (user_id) REFERENCES users(id)
        );`
    );

    const [[user]] = await connection.execute(`SELECT id, nome, email, data_criacao FROM users WHERE email = '${email}'`);

    return user;
};

module.exports = {
    getUsers,
    createUser,
    login,
    getUser
};