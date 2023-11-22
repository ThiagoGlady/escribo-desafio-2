const jwt = require('jsonwebtoken');

const createToken = (username) => {
    const token = jwt.sign({username}, 'chave_secreta', {expiresIn: '1h'});

    return token;
};

module.exports = {
    createToken,
}