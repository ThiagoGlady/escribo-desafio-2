const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (email) => {
    const token = jwt.sign({email}, process.env.SECRET, {expiresIn: '30m'});

    return token;
};

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    const secret_key = process.env.SECRET;

    if (!token) {
        return res.status(401).json({
            mensagem: 'Não autorizado'
        })
    };

    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            if (err.name == 'TokenExpiredError') {
                return res.status(403).json({ mensagem: 'Sessão inválida' });
            } else {
                return res.status(403).json({ mensagem: 'Não autorizado' });
            }
        };

        req.body.decoded = decoded.email;
        next();
    });

};

module.exports = {
    createToken,
    verifyToken
}