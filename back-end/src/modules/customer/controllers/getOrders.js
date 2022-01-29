const { StatusCodes } = require('http-status-codes');
const { getOrdersHandler } = require('../services/getOrdersHandler');

const getOrders = async (req, res) => {
  const data = await getOrdersHandler();
  return res.status(StatusCodes.OK).json({ sales: data });
};

module.exports = { getOrders };