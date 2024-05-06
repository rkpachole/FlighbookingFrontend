'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminPagePermission extends Model { 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AdminPagePermission.hasMany(models.AdminPages, {foreignKey: 'page_id',as: 'pages'});   
       AdminPagePermission.belongsTo(models.AdminRolePermission);         
    }
  }
  AdminPagePermission.init({ 
    id:{
        type: DataTypes.INTEGER(20),
        primaryKey: true,
        autoIncrement: true,
    },
    page_id: DataTypes.INTEGER(20),
    name: DataTypes.JSON,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    freezeTableName: true,  
    sequelize,
    modelName: 'adminpagepermission',
  }); 
  return AdminPagePermission;  
};