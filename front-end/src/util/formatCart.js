const formatCart = (cart) => (
  Object.entries(cart).map((item) => {
    const name = item[0];
    const { price } = item[1];
    const { quantity } = item[1];
    const { productId } = item[1];
    return { name, price, quantity, productId };
  })
);

module.exports = { formatCart };
