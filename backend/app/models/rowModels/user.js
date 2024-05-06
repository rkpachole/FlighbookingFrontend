const { Sequelize } = require('sequelize');
const db = require("../../models");
const User = db.user;
const Op = db.Sequelize.Op;
const ApiHelper = require("../../helpers/apiHelper");
const sequelize = ApiHelper.getSequelize();
async function myAllowances(req,res) {
    userId = req.userId
    //==========For Allowance Types ==========
    const allowanceTypesQery = `select ua."userAllowanceId", ua."allowanceAmount", ua.status,uat."allowanceAmount" ,uat."usedAmount" , at2."allowanceName",at2."allowanceImage" from user_allowances ua 
    left join user_allowances_types uat on uat."userAllowanceId" = ua."userAllowanceId"
    left join allowance_types at2 on at2."allowanceTypeId"  = uat."allowanceTypeId" 
    where ua."userId"= ${userId} and ua.status = '0'`;
    allowanceTypes = await sequelize.query(allowanceTypesQery,{ type: Sequelize.QueryTypes.SELECT});
    var totalAllowance = 0;
    var totalUsedAllowance = 0;
    allowanceTypes.forEach(allowanceType => {
        totalAllowance+= parseFloat(allowanceType.allowanceAmount);
        totalUsedAllowance+= parseFloat(allowanceType.usedAmount);
    });
    //==========For Sprint Details==========
    const sprintQuery = `select * from sprints s where "userId" = ${userId} and status = '0'
    `;
    sprintDetails = await sequelize.query(sprintQuery,{ type: Sequelize.QueryTypes.SELECT});
    
    data = {
        "totalAllowance":totalAllowance,
        "totalUsedAllowance":totalUsedAllowance,
        "allowanceTypes" : allowanceTypes,
        "sprintDetails" : sprintDetails,
    }
    data1= allowanceTypes
    return data;
}

async function manageHoes(req,res) {
    userId = req.userId
    //==========For Hoes ==========
    const hoesQuery = `select u."userId",u."firstName" ,u."lastName" ,u."profileImage"  from users u where "pimpId"  = ${userId} and status = '0' order by u."userId" desc  limit 10`;
    hoes = await sequelize.query(hoesQuery,{ type: Sequelize.QueryTypes.SELECT});
    var totalHoes = hoes.length;
    //==========For Jobs ==========
    const jobQuery = `select j."jobId" ,j."jobApplayerId" ,j.title ,j.amount ,j.description ,j.status from jobs j  where j."userId"  = ${userId} order by j."jobId" desc  limit 10`;
    jobs = await sequelize.query(jobQuery,{ type: Sequelize.QueryTypes.SELECT});
    //==========For Sprint ==========
    const sprintCountQuery = `select count(s."sprintId") as totalSprint from sprints s where s."userId" = ${userId}`;
    sprintCount = await sequelize.query(sprintCountQuery,{ type: Sequelize.QueryTypes.SELECT});
    data = {
        "totalHoes":totalHoes,
        "totalSprint":sprintCount[0].totalsprint,
        "hoes":hoes,
        "jobs":jobs,
    }
    return data;
}


async function getHome(req,res) {
    userId = req.userId
    //==========For Allowance Types ==========
    const allowanceTypesQery = `select ua."userAllowanceId", ua."allowanceAmount", ua.status,uat."allowanceAmount" ,uat."usedAmount" , at2."allowanceName",at2."allowanceImage" from user_allowances ua 
    left join user_allowances_types uat on uat."userAllowanceId" = ua."userAllowanceId"
    left join allowance_types at2 on at2."allowanceTypeId"  = uat."allowanceTypeId" 
    where ua."userId"= ${userId} and ua.status = '0'`;
    allowanceTypes = await sequelize.query(allowanceTypesQery,{ type: Sequelize.QueryTypes.SELECT});
    var totalAllowance = 0;
    var totalUsedAllowance = 0;
    allowanceTypes.forEach(allowanceType => {
        totalAllowance+= parseFloat(allowanceType.allowanceAmount);
        totalUsedAllowance+= parseFloat(allowanceType.usedAmount);
    });
    data = {
        "totalAllowance":totalAllowance,
        "totalUsedAllowance":totalUsedAllowance,
    }
    return data;
}
module.exports = { myAllowances,manageHoes,getHome };