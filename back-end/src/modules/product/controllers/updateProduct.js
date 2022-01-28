const { StatusCodes } = require('http-status-codes');
const { updateProductHandler } = require('../services');

const updateProduct = async (req, res) => {
    const { name, price, urlImage } = req.body;
    const { id } = req.params;
    const { role } = req.loggedUser;
    if (role !== 'administrator') {
        return res.status(StatusCodes.UNAUTHORIZED)
            .json({ message: 'user unauthorized' });
    }
    const updatedProduct = await updateProductHandler({ id, name, price: +price, urlImage });
    return res.status(StatusCodes.OK).json(updatedProduct);
};

module.exports = {
    updateProduct,
};
