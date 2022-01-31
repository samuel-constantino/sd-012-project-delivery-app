const { Sale } = require('../../../database/models');

const updateSaleHandler = async (id, update) => {
  const sale = await Sale.update({ status: update }, { where: { id } });
  return sale;
};

module.exports = { updateSaleHandler };
