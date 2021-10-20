'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Input',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Output',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Storage',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Internet of Things (IoT)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mobile',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
