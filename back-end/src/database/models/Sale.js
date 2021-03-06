module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale',
    {
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      createdAt: 'saleDate',
      updatedAt: false,
      tableName: 'sales',
      underscored: true,
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'customer' },
    );
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' },
    );
  };

  return Sale;
};
