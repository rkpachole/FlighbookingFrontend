const { Sequelize, DataTypes } = require('sequelize');
const ApiHelper = require("../../helpers/apiHelper");
const sequelize = ApiHelper.getSequelize();
const queryInterface = sequelize.getQueryInterface();

async function userTable() {
  const tableName = 'users';

  queryInterface.describeTable(tableName)
    .then(tableDefinition => {
    if (tableDefinition.ganeshdata) {
      return Promise.resolve();
    }
    return queryInterface.addColumn(tableName,'ganeshdata',
    { 
      type: Sequelize.STRING 
    });
  });
}
module.exports = userTable;
