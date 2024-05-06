'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Customer.belongsTo(models.user, {foreignKey: 'agentRef', as: 'agent'});
    }
  }
  Customer.init({   
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
            title: {
                type: DataTypes.STRING
            },
            firstName: {
                type: DataTypes.STRING
            },
            lastName: {
                type: DataTypes.STRING
            },
            gender: {
              type: DataTypes.ENUM('Male','Female','other'),
            },
            mobileNumber: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            passport: {
                type: DataTypes.STRING
            },       
            DOB: {
                type: DataTypes.STRING,
                
            },
            passportExp: {
                type: DataTypes.STRING,            
            },
            agentRef: {
                type: DataTypes.INTEGER(10),            
            },
            status: {
              type: DataTypes.INTEGER(4),
              defaultValue: 1
            },
            isDeleted: {
              type: DataTypes.INTEGER(4),
              defaultValue: 0
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
    modelName: 'customer',
    defaultScope :{
      attributes: {
        exclude:['createdAt','updatedAt']
      }
    }
  });
  
  return Customer; 
};