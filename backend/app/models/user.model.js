
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model { 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here    
     // User.belongsTo(models.Country, {foreignKey: 'countryId', as: 'country'})
    }
  }
  User.init({  
           id: {
            type: DataTypes.INTEGER(20),
            autoIncrement: true,
            primaryKey: true
        },
        roleId: {
            type: DataTypes.ENUM('1','2','3','4','5'),
            comment: '1=Super Admin, 2=Admin, 3=User, 4=Agent, 5=Company',
            defaultValue: '3'
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        mobileNumber: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        countryId: {
            type: DataTypes.INTEGER(20),
            comment: 'Foreign key for table country',
        },
        stateId: {
            type: DataTypes.INTEGER(20),
            comment: 'Foreign key for table state',
        },
        cityId: {
            type: DataTypes.INTEGER(20),
            comment: 'Foreign key for table city',
        },
        companyName:{
            type: DataTypes.STRING
        },
        panNumber:{
            type: DataTypes.STRING
        },
        businessType:{
            type: DataTypes.STRING
        },
        gstNumber:{
            type: DataTypes.STRING
        },
        website:{
            type: DataTypes.STRING
        },
    createdAt: {
      field: 'createdAt',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updatedAt',
      type: DataTypes.DATE
    },
  }, {
    freezeTableName: true,    
    sequelize,
    modelName: 'users',
    defaultScope:{
      attributes:{
        exclude: ['createdAt','updatedAt']
      }
    }
  });
 
  return User;  
};
