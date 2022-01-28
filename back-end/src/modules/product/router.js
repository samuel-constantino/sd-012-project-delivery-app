const express = require('express');
const rescue = require('express-rescue');
const { auth } = require('../../global/middlewares/auth');
const {
    getProducts,
    createProduct,
    updateProduct,
    removeProduct,
} = require('./controllers');

const product = express.Router();

product.use(rescue(auth));

product.post('/', rescue(getProducts));
product.post('/create', rescue(createProduct));
product.post('/update/:id', rescue(updateProduct));
product.get('/remove/:id', rescue(removeProduct));

module.exports = { product };
