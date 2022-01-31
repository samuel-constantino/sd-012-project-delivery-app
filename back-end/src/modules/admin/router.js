const express = require('express');
const rescue = require('express-rescue');
const { auth } = require('../../global/middlewares/auth');
const { checkAdmin } = require('./middlewares/checkAdmin');
const {
  getUsers, deleteUser,
} = require('./controllers');
const { postRegister } = require('../register/controllers');

const admin = express.Router();

admin.use(rescue(auth));
admin.use(rescue(checkAdmin));

admin.delete('/users/delete/:id', rescue(deleteUser));
admin.get('/users', rescue(getUsers));
admin.post('/users/register', rescue(postRegister));

module.exports = { admin };
