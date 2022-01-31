const { Sale, Product } = require('../../../database/models');

const getSaleByIdHandler = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: { model: Product, as: 'products' },
  });
  return sale;
};

module.exports = { getSaleByIdHandler };
