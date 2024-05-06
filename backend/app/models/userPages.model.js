/** @format */

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserPages extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPages.init(
    {
      
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true ,
      sequelize,
      modelName: "userPages",
    }
  );  
  return UserPages; 
};
