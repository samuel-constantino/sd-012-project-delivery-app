const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/errors/ApiError');

const productSchema = Joi.object({
  name: Joi.string().empty(false).required(),
  price: Joi.number().precision(2).empty(false).required(),
  urlImage: Joi.string().empty(false).required(),
});

const productValidation = (data) => {
  const { error } = productSchema.validate(data);

  if (error) return badRequest(error.message);
};

module.exports = { productValidation };
