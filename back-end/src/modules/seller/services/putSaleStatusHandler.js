const { Sale } = require('../../../database/models');
const { statusValidation } = require('../validations/statusValidation');
const { findSale } = require('../../helpers');

const putSaleStatusHandler = async (id, status) => {
  statusValidation({ status });
  await Sale.update({ status }, { where: { id } });
  const sale = findSale(id);
  return sale;
};

module.exports = { putSaleStatusHandler };
