const md5 = require('md5');
const { User } = require('../../../database/models');
const { ApiError: { notFound } } = require('../../../global/errors/ApiError');
const { loginValidation } = require('../validations/loginValidation');
const { getToken } = require('../../../global/utils');

const postLoginHandler = async (user) => {
    loginValidation(user);
    const { password, email } = user;
    const encryptedPassword = md5(password);
    const checkUser = await User.findOne({ where: { email, password: encryptedPassword } });
    if (!checkUser) notFound('User does not exist');
    const { name, role } = checkUser.dataValues;
    const token = getToken(checkUser.dataValues);
    return { name, email, role, token };
};

module.exports = {
    postLoginHandler,
};
