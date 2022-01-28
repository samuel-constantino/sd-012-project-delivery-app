const jwt = require('jsonwebtoken');

const getToken = (user) => {
    const SECRET = process.env.JWT_SECRET;

    const OPTIONS = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };

    const { password, ...payload } = user;

    const token = jwt.sign({ data: payload }, SECRET, OPTIONS);

    return token;
};

module.exports = {
    getToken,
};