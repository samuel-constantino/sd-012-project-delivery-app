const { Product } = require('../../../database/models');

const calculateTotalPrice = async (products) => {
  const partialPrices = await Promise.all(products.map(async ({ productId, quantity }) => {
    const productDB = await Product.findByPk(productId);
    return +(productDB.dataValues.price * quantity).toFixed(2);
  }));
  return partialPrices.reduce((acc, cur) => acc + cur);
};

module.exports = { calculateTotalPrice };