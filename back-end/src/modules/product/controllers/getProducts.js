const { StatusCodes } = require('http-status-codes');
const { getProductsHandler } = require('../services');

const getProducts = async (_req, res) => {
    const products = await getProductsHandler();
    return res.status(StatusCodes.OK).json({ products });
};

module.exports = {
    getProducts,
};
