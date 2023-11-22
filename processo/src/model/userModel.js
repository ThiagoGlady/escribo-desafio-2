const connection = require('./connection');
const getData = require('../helpers/getData');
const makeTelefoneQuery = require('../helpers/makeTelefoneQuery');

const getUsers = async () => {
    const [rows] = await connection.execute('SELECT * FROM users');

    return rows;
};

const createUser = async (user) => {
    const {nome, email, senha, telefones} = user;
    
    const dateUTC = getData();

    const createdUser = await connection.execute(
        'INSERT INTO users (nome, email, senha, data_criacao) VALUES (?, ?, ?, ?)',
        [nome, email, senha, dateUTC]
    );

    createdUser[0].data_criacao = dateUTC;

    const userId = createdUser[0].insertId;
    const numbersToPut = makeTelefoneQuery(telefones, userId);

    await connection.execute(
        `INSERT INTO phonenumbers (user_id, num, ddd) VALUES ${numbersToPut}`
    );

    return createdUser;
};

module.exports = {
    getUsers,
    createUser
};