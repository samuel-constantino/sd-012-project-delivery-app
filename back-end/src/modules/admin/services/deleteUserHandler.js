const { User } = require('../../../database/models');

const deleteUserHandler = async (id) => User.destroy({ where: { id } });

module.exports = { deleteUserHandler };