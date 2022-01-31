const express = require('express');
const { error } = require('../global/middlewares/error');
const { register } = require('../modules/register/router');
const { login } = require('../modules/login/router');
const { product } = require('../modules/product/router');
const { seller } = require('../modules/seller/router');

const router = express.Router({ mergeParams: true });

router.use('/login', login);
router.use('/register', register);
router.use('/products', product);
router.use('/seller', seller);

router.use(error);

module.exports = { router };