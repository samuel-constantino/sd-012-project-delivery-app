const { StatusCodes } = require('http-status-codes');
const { getSaleByIdHandler } = require('../services');

const getSaleById = async (req, res) => {
  const { id } = req.params;

  const sale = await getSaleByIdHandler(id);

  return res.status(StatusCodes.OK).json(sale);
};

module.exports = { getSaleById };
