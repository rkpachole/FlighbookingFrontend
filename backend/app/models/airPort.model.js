'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AirportList extends Model {  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // AirportList.hasOne(models.CountryFlag, {foreignKey: 'fullCode',as: 'countryFlag'})
      //  /AirportList.belongsTo(models.CountryFlag, {foreignKey: 'code'});
    }
  }
  AirportList.init({   
  id: {
    type: DataTypes.INTEGER(20),
    autoIncrement: true,
    primaryKey: true
   },
    code: DataTypes.STRING(45),
    name: DataTypes.STRING(200),
    citycode: DataTypes.STRING(100),
    city: DataTypes.STRING(200),
    country: DataTypes.STRING(100),
    countrycode: DataTypes.STRING(20),        

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
    modelName: 'airportlist',
    defaultScope :{
      attributes: {
        exclude:['createdAt','updatedAt']
      }
    }
  });
  
  return AirportList; 
};