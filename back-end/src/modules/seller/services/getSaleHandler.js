const { findSale } = require('../../helpers');

const getSaleHandler = async (id) => findSale(id);

module.exports = { getSaleHandler };
