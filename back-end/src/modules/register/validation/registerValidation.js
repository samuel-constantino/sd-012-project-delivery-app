const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/errors/ApiError');

const registerSchema = Joi.object({
  name: Joi.string().min(12).empty(false).required(),
  email: Joi.string().email().empty(false).required(),
  password: Joi.string().min(6).empty(false).required(),
  role: Joi.string().valid('customer', 'seller', 'administrator').empty(false).required(),
});

const registerValidation = (register) => {
  const { error } = registerSchema.validate(register);
  if (error) badRequest(error.message);
};

module.exports = { registerValidation };