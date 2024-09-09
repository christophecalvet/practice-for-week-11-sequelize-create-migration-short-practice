'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //require('dotenv').config();
    console.log("----------------")
    console.log("- " + process.env.DB_FILE)
    console.log("----------------")
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Colors', {



      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Colors');

  }
};
