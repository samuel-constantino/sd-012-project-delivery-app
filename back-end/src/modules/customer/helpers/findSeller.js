const { User } = require('../../../database/models');

const findSeller = async (sellerName) => {
  const seller = await User.findOne({ where: { name: sellerName } });
  return seller.dataValues.id;
};

module.exports = { findSeller };