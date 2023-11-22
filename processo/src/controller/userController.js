const userModel = require('../model/userModel');

const getUsers = async(_req, res) => {
    const rows = await userModel.getUsers();

    return res.status(200).json(rows);
};

const createUser = async (req, res) => {
    const user = req.body;

    const [createdData] = await userModel.createUser(user);

    return res.status(201).json({
        id: createdData.insertId,
    });
};

module.exports = {
    getUsers,
    createUser
}