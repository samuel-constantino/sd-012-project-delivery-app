const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const SECRET = fs.readFileSync(
  path.resolve(__dirname, '../../../jwt.evaluation.key'),
  'utf-8'
).trim();

const decodeToken = (token, secret = SECRET) => {
  const decode = jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      throw new Error('Expired or invalid token');
    }
    return decoded;
  });
  return decode;
};

module.exports = { decodeToken };