const { Product } = require('../../../database/models');
const { productValidation } = require('../validations/productValidation');
const { ApiError: { notFound, badRequest } } = require('../../../global/errors/ApiError');

const updateProductHandler = async (product) => {
    const { id, name, price, urlImage } = product;
    productValidation({ name, price, urlImage });
    const convertedPrice = +price;
    if (!convertedPrice || convertedPrice <= 0) return badRequest('Invalid price');
    const productFound = await Product.findOne({ where: { id } });
    if (!productFound) notFound('Product not found');
    await Product.update(
        { name, price, urlImage },
        { where: { id } },
    );
    const updatedProduct = Product.findOne({ where: { id } });
    return updatedProduct;
};

module.exports = {
    updateProductHandler,
};
