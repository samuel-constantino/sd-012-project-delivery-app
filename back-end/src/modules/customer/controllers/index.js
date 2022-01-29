const { getOrders } = require('./getOrders');
const { postOrder } = require('./postOrder');
const { getOrder } = require('./getOrder');

module.exports = {
  postOrder,
  getOrders,
  getOrder,
};