'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminRolePermission extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here   
      //AdminRolePermission.hasMany(models.AdminPagePermission, {foreignKey: 'id',as: 'permission'});         
    }
  }
  AdminRolePermission.init({ 
    id: {
      primaryKey: true,
      autoIncrement: true,
      type:  DataTypes.INTEGER(20)
    },
    role_id: DataTypes.INTEGER(20),
    permission_id: DataTypes.INTEGER(20),
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // user_type: {
    //   type: DataTypes.ENUM,      
    // },  
  }, {
    freezeTableName: true,  
    sequelize,
    modelName: 'adminrolepermission',
  });
  return AdminRolePermission;  
};