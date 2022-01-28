const { StatusCodes } = require('http-status-codes');
const { postOrderHandler } = require('../services/postOrderHandler');

const postOrder = async (req, res) => {
  const { id, role } = req.loggedUser;
  const { products, deliveryInfo } = req.body;
  const data = await postOrderHandler({ products, deliveryInfo }, { id, role });
  return res.status(StatusCodes.CREATED).json({ sale: data });
};

module.exports = { postOrder };
