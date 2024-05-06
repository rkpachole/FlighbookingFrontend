/** @format */

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserRoles.init(
    {
     
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      role_name: DataTypes.STRING,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      account_id: {
        type: DataTypes.STRING(36),
        require: true
      }
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: "userRoles",
    }
  );
  return UserRoles; 
};
