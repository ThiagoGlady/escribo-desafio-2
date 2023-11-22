const jwt = require('jsonwebtoken');

const createToken = (username) => {
    const token = jwt.sign({username}, 'chave_secreta', {expiresIn: '30m'});

    return token;
};

module.exports = {
    createToken,
}