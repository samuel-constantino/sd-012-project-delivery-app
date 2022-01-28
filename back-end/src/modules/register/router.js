const express = require('express');
const rescue = require('express-rescue');
const { postRegister } = require('./controllers');

const register = express.Router();

register.post('/', rescue(postRegister));

module.exports = { register };