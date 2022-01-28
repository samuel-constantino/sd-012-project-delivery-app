const { StatusCodes } = require('http-status-codes');
const { removeProductHandler } = require('../services');

const removeProduct = async (req, res) => {
    const { id } = req.params;
    const { role } = req.loggedUser;
    if (role !== 'administrator') {
        return res.status(StatusCodes.UNAUTHORIZED)
            .json({ message: 'user unauthorized' });
    }
    const removedProduct = await removeProductHandler({ id });
    return res.status(StatusCodes.OK).json(removedProduct);
};

module.exports = {
    removeProduct,
};
