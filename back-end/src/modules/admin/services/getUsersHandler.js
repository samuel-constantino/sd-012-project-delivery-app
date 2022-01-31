const { Op } = require('sequelize');
const { User } = require('../../../database/models');

const getUsersHandler = async () => User.findAll({
  where: {
    [Op.not]: [
      { role: 'administrator' },
    ],
  },
});

module.exports = { getUsersHandler };