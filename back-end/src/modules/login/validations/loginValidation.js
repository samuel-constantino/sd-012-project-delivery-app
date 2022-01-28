const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/errors/ApiError');

const loginSchema = Joi.object({
  email: Joi.string().empty(false).required(),
  password: Joi.string().empty(false).required(),
});

const loginValidation = (data) => {
  const { error } = loginSchema.validate(data);

  if (error) return badRequest(error.message);
};

module.exports = { loginValidation };