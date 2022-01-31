const { StatusCodes } = require('http-status-codes');
const { getSaleHandler } = require('../services');

const getSale = async (req, res) => {
  const { id } = req.params;
  const sale = await getSaleHandler(id);
  return res.status(StatusCodes.OK).json({ sale });
};

module.exports = { getSale };
