const { StatusCodes } = require('http-status-codes');
const { getOrderHandler } = require('../services/getOrderHandler');

const getOrder = async (req, res) => {
  const { id } = req.params;
  const data = await getOrderHandler(id);
  return res.status(StatusCodes.OK).json({ sale: data });
};

module.exports = { getOrder };