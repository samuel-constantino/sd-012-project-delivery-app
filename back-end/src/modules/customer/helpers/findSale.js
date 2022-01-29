const { Sale, User, Product } = require('../../../database/models');

const findSale = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    include: [
      { model: User, as: 'customer' },
      { model: User, as: 'seller' },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  return sale;
};

module.exports = { findSale };
