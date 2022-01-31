const { findSale } = require('../../helpers');

const getOrderHandler = async (id) => findSale(id);

module.exports = { getOrderHandler };