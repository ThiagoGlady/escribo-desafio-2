const userModel = require('../model/userModel');
const jwtController = require('../helpers/jwtController');

const getUsers = async (_req, res) => {
    const rows = await userModel.getUsers();

    return res.status(200).json(rows);
};

const createUser = async (req, res) => {
    const user = req.body;

    const [createdData] = await userModel.createUser(user);
   
    if (createdData.hasOwnProperty('mensagem')) {
        return res.status(400).json(createdData);
    };

    return res.status(201).json({
        id: createdData.insertId,
        data_criacao: createdData.data_criacao,
        token: jwtController.createToken(user.email)
    });
};

const login = async (req, res) => {
    const user = req.body;

    const [loginData] = await userModel.login(user);

    if (loginData.hasOwnProperty('mensagem')) {
        const {mensagem} = loginData;

        if (mensagem == 'Usuário e/ou senha inválidos') {
            return res.status(401).json(loginData);
        }

        return res.status(400).json(loginData);
    };

    return res.status(200).json({
        id: loginData.id,
        data_criacao: loginData.data_criacao,
        token: jwtController.createToken(loginData.email)
    });
}

const getUser = async (req, res) => {
    const {decoded} = req.body;

    const user = await userModel.getUser(decoded);

    return res.status(200).json(user);
};

module.exports = {
    getUsers,
    createUser,
    login,
    getUser
}