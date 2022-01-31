const { StatusCodes } = require('http-status-codes');
const { postLoginHandler } = require('../services');

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const data = await postLoginHandler({ email, password });
    return res.status(StatusCodes.OK).json(data);
};

module.exports = {
    postLogin,
};
