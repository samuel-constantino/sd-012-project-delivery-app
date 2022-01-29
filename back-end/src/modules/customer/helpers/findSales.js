const { Sale, User, Product } = require('../../../database/models');

const findSales = async () => {
  const sales = await Sale.findAll({
    include: [
      { model: User, as: 'customer' },
      { model: User, as: 'seller' },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  return sales;
};

module.exports = { findSales };