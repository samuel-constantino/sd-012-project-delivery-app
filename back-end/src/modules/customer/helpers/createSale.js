const { Sale } = require('../../../database/models');

const createSale = async (order, products) => {
  const sale = await Sale.create(order);
  products.forEach(async ({ productId, quantity }) => {
    await sale.addProducts(productId, { through: { quantity } });
  });
  return sale.dataValues;
};

module.exports = { createSale };