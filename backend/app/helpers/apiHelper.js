const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require('sequelize');
var nodemailer = require('nodemailer');
var fs = require('fs');

//====For Send Success And Error Responces===========
function successError(res,statusCode,message,data) {
  return res.status(200).send({
    status:statusCode==200 ? true: false,
    statusCode:statusCode,
    message: message,
    data: data,
  });
}
function successError2(res,statusCode,message,data) {
  return res.status(200).send({
    status:statusCode==200 ? true: false,
    statusCode:statusCode,
    message: message,
    order: data,
  });
}

//==========For Get Pagination==========
const getPagination = (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

//==========For Get Pagination Data==========
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: result } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, totalPages, currentPage, result };
};

//==========Sequelize Config==========
const getSequelize = () =>{
  const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    logging: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  return sequelize;
}

//==========Mail Config Function==========
const mailConfig = () =>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lakhanjourney@gmail.com',
      pass: 'Kamalsingh'
    }
  });
  return transporter;
}

//==========For Read Html Code==========
var readHTMLFile = function(path, callback) {
  fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
    if (err) {
      callback(err); 
      throw err;
    }
    else {
      callback(null, html);
    }
  });
};


//===========Here All Function Exports =============
module.exports = { 
  successError,
  getPagingData,
  getPagination,
  getSequelize,
  mailConfig,
  readHTMLFile,
  successError2   
};