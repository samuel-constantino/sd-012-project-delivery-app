'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'user_id',
      },

      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'seller_id',
      },

      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price',
      },

      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_address',
      },

      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_number',
      },

      status: {
        allowNull: false,
        type: Sequelize.STRING
      },

      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
