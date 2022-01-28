const { StatusCodes } = require('http-status-codes');
const { createProductHandler } = require('../services');

const createProduct = async (req, res) => {
    const { name, price, urlImage } = req.body;
    const { role } = req.loggedUser;
    const product = { name, price: +price, urlImage };
    const newProduct = await createProductHandler({ product, role });
    return res.status(StatusCodes.CREATED).json(newProduct);
};

module.exports = {
    createProduct,
};
