const { ApiError: { unauthorized } } = require('../../../global/errors/ApiError');

const checkUserRole = (role) => {
  if (role !== 'customer') unauthorized('Only customers are allowed to post orders');
};

module.exports = { checkUserRole };