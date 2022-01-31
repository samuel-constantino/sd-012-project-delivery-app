const { Sale, User, Product } = require('../../database/models');

const findSales = async (id, role) => {
  const searchFilter = role === 'customer' ? 'userId' : 'sellerId';
  const sales = await Sale.findAll({
    where: { [searchFilter]: id },
    include: [
      { model: User, as: 'customer' },
      { model: User, as: 'seller' },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  return sales;
};

module.exports = { findSales };