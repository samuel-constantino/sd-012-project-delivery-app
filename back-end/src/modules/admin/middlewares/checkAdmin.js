const { ApiError: { unauthorized } } = require('../../../global/errors/ApiError');

const checkAdmin = (req, res, next) => {
  const { role } = req.loggedUser;
  if (role !== 'administrator') unauthorized('Log in as admin to proceed');
  return next();
};

module.exports = { checkAdmin };