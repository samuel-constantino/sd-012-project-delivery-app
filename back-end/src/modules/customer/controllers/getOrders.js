const { StatusCodes } = require('http-status-codes');
const { getOrdersHandler } = require('../services/getOrdersHandler');

const getOrders = async (req, res) => {
  const { id, role } = req.loggedUser;
  const data = await getOrdersHandler(id, role);
  return res.status(StatusCodes.OK).json({ sales: data });
};

module.exports = { getOrders };