'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PassengerInfo extends Model {  
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
  PassengerInfo.init({   
  id: {
    type: DataTypes.INTEGER(20),
    autoIncrement: true,
    primaryKey: true
   },
    flightId                        : DataTypes.STRING(10),
    flightNumber                    : DataTypes.STRING(20),
    bookingId                       : DataTypes.STRING(20),
    title                           : DataTypes.STRING(20),
    firstName                       : DataTypes.STRING(20),
    lastName                        : DataTypes.STRING(20),
    dob                             : DataTypes.STRING(20),
    type                            : DataTypes.STRING(20),    
    seatNo                          : DataTypes.STRING(20), 
    passportNumber                  : DataTypes.STRING(50), 
    passportNation                  : DataTypes.STRING(50), 
    passportExp                     : DataTypes.STRING(50), 
    baggageInfo                     : DataTypes.STRING(1000),
    mealInfo                        : DataTypes.STRING(1000),
    seatInfo                        : DataTypes.STRING(500),
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
    modelName: 'PassengerInfo',
    defaultScope :{
      attributes: {
        exclude:['createdAt','updatedAt']
      }
    }
  });
  
  return PassengerInfo; 
};