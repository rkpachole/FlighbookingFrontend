'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CountriesFlag extends Model { 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     //CountriesFlag.hasOne(models.Airports, {foreignKey: 'fullCode'})
     //CountriesFlag.belongsTo(models.Airports, {foreignKey: 'code'});
    }
  }
  CountriesFlag.init({  
    id: {
         type: DataTypes.INTEGER(20),
         autoIncrement: true,
         primaryKey: true
        },
    country: DataTypes.STRING(200),
    code: DataTypes.STRING(40),
    fullCode: DataTypes.STRING(40),
    url: DataTypes.STRING(225),
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
    modelName: 'countriesFlag',
    defaultScope:{
      attributes:{
        exclude: ['createdAt','updatedAt']
      }
    }
  });
 
  return CountriesFlag;  
};