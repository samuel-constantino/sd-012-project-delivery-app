const { StatusCodes } = require('http-status-codes');
const { getSalesHandler } = require('../services');

const getSales = async (req, res) => {
  const { id, role } = req.loggedUser;
  const data = await getSalesHandler(id, role);
  return res.status(StatusCodes.OK).json({ sales: data });
};

module.exports = { getSales };
