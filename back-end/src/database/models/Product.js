module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'products',
    });

  return Product;
};