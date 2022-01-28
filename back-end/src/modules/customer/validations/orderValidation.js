const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/errors/ApiError');

const orderSchema = Joi.object({
  products: Joi.array().items(
    Joi.object({
      productId: Joi.number().required().empty(false),
      quantity: Joi.number().required().empty(false),
    }).required().empty(false),
  ),
  deliveryInfo: Joi.object({
    deliveryAddress: Joi.string().required().empty(false),
    deliveryNumber: Joi.string().required().empty(false),
    sellerName: Joi.string().required().empty(false),
    status: Joi.string()
      .valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue')
      .required()
      .empty(false),
  }).required().empty(false),
});

const orderValidation = (data) => {
  const { error } = orderSchema.validate(data);
  if (error) return badRequest(error.message);
};

module.exports = { orderValidation };
