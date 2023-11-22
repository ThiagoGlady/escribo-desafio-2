const getData = () => {
    const date = new Date(Date.now());

    return date.toUTCString();
}

module.exports = getData;