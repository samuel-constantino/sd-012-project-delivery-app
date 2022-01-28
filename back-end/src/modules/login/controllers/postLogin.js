const { StatusCodes } = require('http-status-codes');
const { postLoginHandler } = require('../services');

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const token = await postLoginHandler({ email, password });
    return res.status(StatusCodes.OK).json({ token });
};

module.exports = {
    postLogin,
};
