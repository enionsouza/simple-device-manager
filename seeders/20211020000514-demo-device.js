'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Devices',
      [
        {
          CategoryId: 1,
          color: 'gray',
          partNumber: 10001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 1,
          color: 'red',
          partNumber: 10002,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 2,
          color: 'blue',
          partNumber: 10003,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 2,
          color: 'green',
          partNumber: 10004,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 3,
          color: 'orange',
          partNumber: 10005,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 3,
          color: 'white',
          partNumber: 10006,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 4,
          color: 'yellow',
          partNumber: 10007,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 4,
          color: 'pink',
          partNumber: 10008,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 5,
          color: 'brown',
          partNumber: 10009,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 5,
          color: 'purple',
          partNumber: 10010,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Devices', null, {});
  },
};
