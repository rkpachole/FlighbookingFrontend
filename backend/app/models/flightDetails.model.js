'use strict';
const {
  Model
} = require('sequelize');
const db = require("../../app/models");
module.exports = (sequelize, DataTypes) => {
  class FlightDetails extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FlightDetails.belongsTo(models.Booking, {foreignKey: 'bookingId'});
    }
  }
  FlightDetails.init({   
                id: {
                  type: DataTypes.INTEGER(20),
                  autoIncrement: true,
                  primaryKey: true
                },
                bookingId                       : DataTypes.STRING(50),
                flightId                        : DataTypes.STRING(10),
                flightNumber                    : DataTypes.STRING(20),
                flightName                      : DataTypes.STRING(20),
                flightCode                      : DataTypes.STRING(20),
                flightLogo                      : DataTypes.STRING(255),
                flightStops                     : DataTypes.STRING(20),
                flightDuration                  : DataTypes.STRING(20),
                departureAirportInformation     : DataTypes.TEXT(),
                arrivalAirportInformation       : DataTypes.TEXT(),
                departureDate                   : DataTypes.STRING(20),
                departureTime                   : DataTypes.STRING(20),
                arrivalDate                     : DataTypes.STRING(20),
                arrivalTime                     : DataTypes.STRING(20),
                fareDetail                      : DataTypes.STRING(20),  

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
        modelName: 'flightDetails',
        defaultScope :{
          attributes: {
            exclude:['createdAt','updatedAt']
          }
        }
  });
  
  return FlightDetails; 
};