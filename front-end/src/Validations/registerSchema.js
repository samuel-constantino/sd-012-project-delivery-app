const Joi = require('joi');

const SIX = 6;
const TWELVE = 12;

const registerSchema = Joi.object().keys({
  name: Joi
    .string()
    .min(TWELVE)
    .required()
    .messages({
      'string.name': 'Nome Inválido',
      'any.required': 'O nome é obrigatório',
    }),

  email: Joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Email Inválido',
      'any.required': 'O email é obrigatório',
    }),

  password: Joi
    .string()
    .min(SIX)
    .required()
    .messages({
      'string.min': 'Formato de senha inválido',
      'any.required': 'A senha é obrigatória',
    }),
});

module.exports = registerSchema;
