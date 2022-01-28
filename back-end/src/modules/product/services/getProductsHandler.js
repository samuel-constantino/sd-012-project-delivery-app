const { Product } = require('../../../database/models');

const getProductsHandler = async ({ offset, limit }) => {
    const products = await Product.findAndCountAll({ offset, limit });
    return products;
};

module.exports = {
    getProductsHandler,
};
