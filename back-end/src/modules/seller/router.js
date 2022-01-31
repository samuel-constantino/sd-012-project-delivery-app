const express = require('express');
const rescue = require('express-rescue');
const { auth } = require('../../global/middlewares/auth');
const {
  getSale,
  getSellers,
  putSaleStatus,
  getSales,
} = require('./controllers');

const seller = express.Router();

seller.use(rescue(auth));

seller.get('/sellers', rescue(getSellers));
seller.put('/orders/:id/update', rescue(putSaleStatus));
seller.get('/orders/:id', rescue(getSale));
seller.get('/orders', rescue(getSales));

module.exports = { seller };
