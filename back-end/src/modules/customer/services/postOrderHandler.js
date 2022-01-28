const { calculateTotalPrice } = require('../helpers/calculateTotalPrice');
const { checkUserRole } = require('../helpers/checkUserRole');
const { createSale } = require('../helpers/createSale');
const { findSeller } = require('../helpers/findSeller');
const { orderValidation } = require('../validations/orderValidation');

const postOrderHandler = async (order, { id: userId, role }) => {
  checkUserRole(role);
  orderValidation(order);
  const { products, deliveryInfo } = order;
  const { deliveryAddress, deliveryNumber, sellerName, status = 'Pendente' } = deliveryInfo;
  const totalPrice = await calculateTotalPrice(products);
  const sellerId = await findSeller(sellerName);
  const sale = await createSale({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  }, products);
  return sale;
};

module.exports = { postOrderHandler };
