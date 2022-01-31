const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const SECRET = fs.readFileSync(
    path.resolve(__dirname, '../../../jwt.evaluation.key'),
    'utf-8',
).trim();

const OPTIONS = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const getToken = (user) => {
    const { password, ...payload } = user;
    const token = jwt.sign({ data: payload }, SECRET, OPTIONS);
    return token;
};

module.exports = {
    getToken,
};