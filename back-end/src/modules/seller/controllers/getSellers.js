const { StatusCodes } = require('http-status-codes');
const { getSellersHandler } = require('../services');

const getSellers = async (_req, res) => {
  const data = await getSellersHandler();
  return res.status(StatusCodes.OK).json(data);
};

module.exports = { getSellers };
