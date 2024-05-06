// module.exports = (sequelize, Sequelize) => {
//     const Country = sequelize.define("countries", {
//         id: {
//             type: Sequelize.INTEGER(20),
//             autoIncrement: true,
//             primaryKey: true
//         },
//         countryName: {
//             type: Sequelize.STRING,
//             comment: 'For Country Names',
//         },
//     });
//     return Country;
// };

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model { 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        
    }
  }
  Countries.init({  
    id: {
         type: DataTypes.INTEGER(20),
         autoIncrement: true,
         primaryKey: true
        },
    code: DataTypes.STRING(20),
    sortName: DataTypes.STRING(10),
    name: DataTypes.STRING(40),
    currency: DataTypes.STRING(10),
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
    modelName: 'countries',
    defaultScope:{
      attributes:{
        exclude: ['createdAt','updatedAt']
      }
    }
  });
 
  return Countries;  
};