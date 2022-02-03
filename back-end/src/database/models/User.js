module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

  User.associate = (models) => {
    User.hasMany(models.Sale,
      { foreignKey: 'userId', as: 'customer' }
    );
    User.hasMany(models.Sale,
      { foreignKey: 'sellerId', as: 'seller' }
    );
  };

  return User;
};
