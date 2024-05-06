'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.hasMany(models.FlightDetails, {foreignKey: 'bookingId',as: 'flightInfo'})
    
    }
  }
  Booking.init({     
    id: {
      type: DataTypes.STRING(100),
      autoIncrement: false,                     
      primaryKey: true
    },  
    PNR                 : DataTypes.STRING(45),
    fareRuleId          : DataTypes.STRING(200),
    requestId           : DataTypes.STRING(40),
    preferredFareType   : DataTypes.STRING(15),
    adult               : DataTypes.INTEGER(5),   
    child               : DataTypes.INTEGER(5),  
    infant              : DataTypes.INTEGER(5),  
    refundType          : { 
                            type: DataTypes.ENUM('0','1','2'),
                            comment: '0=NonRefundable ,1=Refundable, 2=PartialRefundable',
                          },
    flightid            : DataTypes.STRING(10),
    basefare            : DataTypes.STRING(15),
    taxesAndFees        : DataTypes.STRING(15),
    payAmount           : DataTypes.STRING(15),
    fareIdentifier      : DataTypes.STRING(15),    
    agentId             : DataTypes.INTEGER(15),
    isDomestic          : {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    bookingStatus       : { 
      type: DataTypes.ENUM('0','1','2','3','4','5'),
      comment: '0=UNCONFIRMED ,1=CONFIRM, 2=PENDING,3=ABORTED,4=ONHOLD,5=CANCELLED',
      defaultValue : "0",
    },
    routeInfo    : DataTypes.STRING(5000),
    bookingType : { 
      type: DataTypes.ENUM('1','2','3'),
      comment: ',1=ONEWAY, 2=ROUNDTRIP,3=MULTICITY',
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
    modelName: 'Booking',
    defaultScope :{
      attributes: {
        exclude:['updatedAt']
      }
    }
  });
  
  return Booking; 
};
