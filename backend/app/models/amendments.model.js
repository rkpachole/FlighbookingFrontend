'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amendments extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
    }
  }
  Amendments.init({   
  id: {
    type: DataTypes.INTEGER(20),
    autoIncrement: true,
    primaryKey: true
   },
    bookingId: DataTypes.STRING(45),
    type: DataTypes.STRING(255),
    remarks: DataTypes.INTEGER(255),
    trips : DataTypes.STRING(500),
    travellersInfo : DataTypes.STRING(500),
    status : DataTypes.STRING(100),
    agentId: DataTypes.STRING(100),
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
    modelName: 'amendments',
    defaultScope :{
      attributes: {
        exclude:['createdAt','updatedAt']
      }
    }
  });  
  return Amendments; 
};