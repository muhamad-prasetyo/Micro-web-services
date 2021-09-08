'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('media', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     image: {
       type: Sequelize.STRING,
       allowNull: false
     },
     create_at: {
       type: Sequelize.DATE,
       allowNull: false
     },
     update_at: {
       type: Sequelize.DATE,
       allowNull: false
     }
   });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('media');
  }
};
