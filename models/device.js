/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Device.init(
    {
      // categoryId: DataTypes.INTEGER,
      color: DataTypes.STRING,
      partNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Device',
    },
  );
  return Device;
};
