const checkEmptyBody = (req, res, next) => {
    const {body} = req;

    if (!Object.keys(body).length) {
        return res.status(400).json({mensagem: 'Requisição vazia'});
    }

    next();
};

module.exports = checkEmptyBody;