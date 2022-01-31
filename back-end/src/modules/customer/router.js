const express = require('express');
const rescue = require('express-rescue');
const { auth } = require('../../global/middlewares/auth');
const {
  postOrder,
  getOrder,
  getOrders,
} = require('./controllers');

const customer = express.Router();

customer.use(rescue(auth));

customer.post('/orders/', rescue(postOrder));
customer.get('/orders/:id', rescue(getOrder));
customer.get('/orders', rescue(getOrders));

module.exports = { customer };
