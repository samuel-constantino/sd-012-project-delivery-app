const { getProductsHandler } = require('./getProductsHandler');
const { createProductHandler } = require('./createProductHandler');
const { updateProductHandler } = require('./updateProductHandler');
const { removeProductHandler } = require('./removeProductHandler');

module.exports = {
    getProductsHandler,
    createProductHandler,
    updateProductHandler,
    removeProductHandler,
};
