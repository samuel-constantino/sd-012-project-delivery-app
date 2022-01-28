'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'sale_id',
      },

      productId: {
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'product_id',
      },

      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};
