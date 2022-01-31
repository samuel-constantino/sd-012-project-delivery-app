const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/errors/ApiError');

const statusSchema = Joi.object({
  status: Joi.string()
    .valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue')
    .required()
    .empty(false),
});

const statusValidation = (data) => {
  const { error } = statusSchema.validate(data);
  if (error) return badRequest(error.message);
};

module.exports = { statusValidation };
