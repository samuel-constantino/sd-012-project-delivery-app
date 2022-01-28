const { StatusCodes } = require('http-status-codes');
const { getProductsHandler } = require('../services');

const getProducts = async (req, res) => {
    const { offset, limit } = req.body;
    const products = await getProductsHandler({ offset: +offset, limit: +limit });
    return res.status(StatusCodes.OK).json({ products });
};

module.exports = {
    getProducts,
};
