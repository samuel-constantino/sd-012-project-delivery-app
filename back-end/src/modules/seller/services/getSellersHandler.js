const { findSellers } = require('../../helpers');

const getSellersHandler = async () => findSellers();

module.exports = { getSellersHandler };