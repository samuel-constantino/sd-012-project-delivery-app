const { StatusCodes } = require('http-status-codes');
const { updateSaleHandler } = require('../services');

const updateSale = async (req, res) => {
  const { id, status } = req.body;

  await updateSaleHandler(id, status);

  res.status(StatusCodes.OK).json(status);
};

module.exports = { updateSale };
