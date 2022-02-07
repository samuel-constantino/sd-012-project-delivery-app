const { StatusCodes } = require('http-status-codes');
const { decodeToken } = require('../utils');

const auth = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) throw new Error('Token not found');
    const decoded = decodeToken(token);
    req.loggedUser = decoded.data;
    return next();
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: err.message });
  }
};

module.exports = { auth };
