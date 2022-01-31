const { StatusCodes } = require('http-status-codes');
const { getUsersHandler } = require('../services');

const getUsers = async (_req, res) => {
  const data = await getUsersHandler();
  return res.status(StatusCodes.OK).json(data);
};

module.exports = { getUsers };