const { StatusCodes } = require('http-status-codes');
const { deleteUserHandler } = require('../services');

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await deleteUserHandler(id);
  return res.status(StatusCodes.NO_CONTENT).end();
};

module.exports = { deleteUser };