const userModel = require('../model/userModel');
const jwtController = require('../helpers/jwtController');

const getUsers = async(_req, res) => {
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
        token: jwtController.createToken(user.nome)
    });
};

module.exports = {
    getUsers,
    createUser
}