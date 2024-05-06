'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Cities.belongsTo(models.states, {foreignKey: 'stateId', as: 'state'});
    }
  }
  Payment.init({   
  id: {
    type: DataTypes.INTEGER(20),
    autoIncrement: true,
    primaryKey: true
   }, 
    bookingId     : DataTypes.STRING(255),
    orderId       : DataTypes.STRING(255),
    paymentId     : DataTypes.STRING(255),
    signature     : DataTypes.STRING(255),
    medium        : DataTypes.STRING(100),
    type          : DataTypes.STRING(100),
    credit        : DataTypes.STRING(100),
    debit         : DataTypes.STRING(100),
    subType       : DataTypes.STRING(100),
    amount        : DataTypes.STRING(50),
    status: { 
      type: DataTypes.ENUM('0','1','2'),
      comment: '1=success,2=pending , 3=cancelled',
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
    modelName: 'payment',
    defaultScope :{
      attributes: {
        exclude:['createdAt','updatedAt']
      }
    }
  });
  
  return Payment; 
};