const formatCart = (cart) => (
  Object.entries(cart).map((item) => {
    const name = item[0];
    const { price } = item[1];
    const { quantity } = item[1];
    return { name, price, quantity };
  })
);

module.exports = { formatCart };
