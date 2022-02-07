const { Product } = require('../../../database/models');

const getProductsHandler = async () => {
    const products = await Product.findAll();
    return products;
};

module.exports = {
    getProductsHandler,
};
