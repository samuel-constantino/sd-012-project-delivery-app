const express = require('express');
const { error } = require('../global/middlewares/error');
const { register } = require('../modules/register/router');
const { login } = require('../modules/login/router');
const { customer } = require('../modules/customer/router');
const { product } = require('../modules/product/router');

const router = express.Router({ mergeParams: true });

router.use('/login', login);
router.use('/register', register);
router.use('/customer', customer);
router.use('/products', product);

router.use(error);

module.exports = { router };
