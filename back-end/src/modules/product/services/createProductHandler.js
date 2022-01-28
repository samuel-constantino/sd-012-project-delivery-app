const { Product } = require('../../../database/models');
const { productValidation } = require('../validations/productValidation');
const {
    ApiError: { conflict, badRequest, unauthorized },
} = require('../../../global/errors/ApiError');

const createProductHandler = async ({ product, role }) => {
    const { name, price } = product;
    if (role !== 'administrator') unauthorized('user unauthorized');
    if (!price || price <= 0) badRequest('Invalid price');
    productValidation(product);
    const productFound = await Product.findOne({ where: { name } });
    if (productFound) conflict('Product already exists');
    const newProduct = await Product.create(product);
    return newProduct;
};

module.exports = {
    createProductHandler,
};
