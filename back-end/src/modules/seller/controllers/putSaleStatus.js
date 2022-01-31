const { StatusCodes } = require('http-status-codes');
const { putSaleStatusHandler } = require('../services');

const putSaleStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const data = await putSaleStatusHandler(id, status);
  return res.status(StatusCodes.OK).json(data);
};

module.exports = { putSaleStatus };
