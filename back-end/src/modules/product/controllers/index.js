const { getProducts } = require('./getProducts');
const { createProduct } = require('./createProduct');
const { updateProduct } = require('./updateProduct');
const { removeProduct } = require('./removeProduct');

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    removeProduct,
};
