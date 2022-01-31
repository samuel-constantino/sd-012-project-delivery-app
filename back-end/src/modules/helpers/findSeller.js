const { User } = require('../../database/models');
const { ApiError: { notFound } } = require('../../global/errors/ApiError');

const findSeller = async (sellerName) => {
  const seller = await User.findOne({ where: { name: sellerName, role: 'seller' } });
  if (!seller) notFound('Seller not found');
  return seller.dataValues.id;
};

module.exports = { findSeller };