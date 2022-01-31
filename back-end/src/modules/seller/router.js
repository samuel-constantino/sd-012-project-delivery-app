const express = require('express');
const rescue = require('express-rescue');
const { getSaleById, updateSale } = require('./controllers');

const seller = express.Router();

seller.get('/orders/:id', rescue(getSaleById));
seller.put('/orders/update', rescue(updateSale));

module.exports = { seller };
