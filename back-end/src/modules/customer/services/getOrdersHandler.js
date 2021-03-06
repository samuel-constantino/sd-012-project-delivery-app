const { ApiError: { unauthorized } } = require('../../../global/errors/ApiError');
const { findSales } = require('../../helpers');

const getOrdersHandler = (id, role) => {
  if (role !== 'customer') unauthorized('Log in as a customer to check orders');
  return findSales(id, role);
};

module.exports = { getOrdersHandler };