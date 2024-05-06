'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminPages extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //AdminPages.belongsTo(models.AdminPagePermission);
    }
  }
  AdminPages.init({ 
    id:{
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER(20),
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    freezeTableName: true, 
    sequelize,
    modelName: 'adminPages',
  });
  return AdminPages;  
};