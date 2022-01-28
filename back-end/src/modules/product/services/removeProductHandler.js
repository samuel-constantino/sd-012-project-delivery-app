const { Product } = require('../../../database/models');
const { ApiError: { notFound } } = require('../../../global/errors/ApiError');

const removeProductHandler = async ({ id }) => {
    const productFound = await Product.findOne({ where: { id } });
    if (!productFound) notFound('Product not found');
    await Product.destroy({ where: { id } });
    return { message: 'Product removed' };
};

module.exports = {
    removeProductHandler,
};
