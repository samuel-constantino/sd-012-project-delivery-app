const { StatusCodes } = require('http-status-codes');
const { postRegisterHandler } = require('../services');

const postRegister = async (req, res) => {
  const { name, email, password, role = 'customer' } = req.body;
  const data = await postRegisterHandler({ name, email, password, role });
  return res.status(StatusCodes.CREATED).json(data);
};

module.exports = { postRegister };