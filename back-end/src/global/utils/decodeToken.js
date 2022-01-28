const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const decodeToken = (token, secret = JWT_SECRET) => {
  const decode = jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      throw new Error('Expired or invalid token');
    }
    return decoded;
  });
  return decode;
};

module.exports = { decodeToken };