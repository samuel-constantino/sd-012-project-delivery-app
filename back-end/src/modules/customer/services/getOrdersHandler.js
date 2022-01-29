const { findSales } = require('../helpers/findSales');

const getOrdersHandler = () => findSales();

module.exports = { getOrdersHandler };