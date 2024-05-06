'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminRoles extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //AdminRoles.hasMany(models.AdminPagePermission, {foreignKey: 'page_id',as: 'pages'});   
    }
  }
  AdminRoles.init({  
    id:{
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    role_name: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    freezeTableName: true, 
    sequelize,
    modelName: 'AdminRoles',
    defaultScope:{
        attributes:{
          exclude: ['createdAt','updatedAt']
        }
      }
  });
  return AdminRoles; 
};