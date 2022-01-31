const md5 = require('md5');
const { Op } = require('sequelize');
const { registerValidation } = require('../validation/registerValidation');
const { User } = require('../../../database/models');
const { ApiError: { conflict } } = require('../../../global/errors/ApiError');

const postRegisterHandler = async (register) => {
  const { name, email, password, role } = register;
  const checkUser = await User.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  if (checkUser) conflict('User already exists');
  registerValidation(register);
  const encryptPassword = md5(password);
  const newUser = await User.create({ name, email, password: encryptPassword, role });
  delete newUser.dataValues.password;
  return newUser;
};

module.exports = { postRegisterHandler };