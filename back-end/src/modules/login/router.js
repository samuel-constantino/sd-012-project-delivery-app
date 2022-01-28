const express = require('express');
const rescue = require('express-rescue');

const { postLogin } = require('./controllers');

const login = express.Router();

login.post('/', rescue(postLogin));

module.exports = { login };
