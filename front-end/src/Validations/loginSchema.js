const Joi = require('joi');

const SIX = 6;

const loginSchema = Joi.object().keys({
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

module.exports = loginSchema;
