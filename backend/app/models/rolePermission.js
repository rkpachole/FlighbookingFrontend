/** @format */

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RolePermission.init(
    {      
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      role_id: DataTypes.INTEGER,
      permissinon_id: DataTypes.INTEGER,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      userType: {
        type: DataTypes.ENUM('0','1','2'),
        values: "",
      },
    },
    {
      freezeTableName: true ,
      sequelize,
      modelName: "rolePermission",
    }
  );  
  return RolePermission; 
};
