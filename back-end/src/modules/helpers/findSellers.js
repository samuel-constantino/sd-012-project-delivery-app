const { User } = require('../../database/models');

const findSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' } });
  return sellers;
};

module.exports = { findSellers };