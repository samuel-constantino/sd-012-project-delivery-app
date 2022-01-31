const { ApiError: { unauthorized } } = require('../../../global/errors/ApiError');
const { findSales } = require('../../helpers');

const getSalesHandler = async (id, role) => {
  if (role !== 'seller') unauthorized('Log in as a seller to check sales');
  return findSales(id, role);
};

module.exports = { getSalesHandler };
