const { findSale } = require('../helpers/findSale');

const getOrderHandler = async (id) => findSale(id);

module.exports = { getOrderHandler };