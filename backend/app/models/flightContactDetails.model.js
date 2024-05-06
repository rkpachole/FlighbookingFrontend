'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FlightContact extends Model {  
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
  FlightContact.init({   
  id: {
    type: DataTypes.INTEGER(20),
    autoIncrement: true,
    primaryKey: true
   },
    flightId                        : DataTypes.STRING(10),
    flightNumber                    : DataTypes.STRING(20),
    bookingId                       : DataTypes.STRING(20),
    companyName                     : DataTypes.STRING(20),
    gstNumber                       : DataTypes.STRING(20),
    email                           : DataTypes.STRING(20),
    mobile                          : DataTypes.STRING(20),
    address                         : DataTypes.STRING(255),
    personalEmail                   : DataTypes.STRING(50),
   
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
    modelName: 'FlightContact',
    defaultScope :{
      attributes: {
        exclude:['createdAt','updatedAt']
      }
    }
  });
  
  return FlightContact; 
};