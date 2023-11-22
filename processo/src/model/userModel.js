const connection = require('./connection');

const getUsers = async () => {
    const [rows] = await connection.execute('SELECT * FROM users');

    return rows;
};

const createUser = async (user) => {
    const {title, email} = user;

    const createdUser = await connection.execute(
        'INSERT INTO users (title, email) VALUES (?, ?)',
        [title, email]
    );

    return createdUser;
};

module.exports = {
    getUsers,
    createUser
};