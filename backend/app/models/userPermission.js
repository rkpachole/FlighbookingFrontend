'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPermission extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPermission.init({  
    id:{
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    page_id: DataTypes.STRING,
    name: DataTypes.JSON,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    freezeTableName: true,  
    sequelize,
    modelName: 'userPermission',
  }); 
  return UserPermission;  
};