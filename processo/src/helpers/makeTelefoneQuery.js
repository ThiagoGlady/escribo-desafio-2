const makeTelefoneQuery = (telefones, userId) => {
    let initialString = '';

    for (let i = 0; i < telefones.length; i++) {
        let makingString = `('${userId}', '${telefones[i].numero}', '${telefones[i].ddd}')`;

        if (i < telefones.length - 1) {
            makingString += ', ';
        } else {
            makingString += ';';
        }

        initialString += makingString;
    }

    return initialString;
};

module.exports = makeTelefoneQuery;