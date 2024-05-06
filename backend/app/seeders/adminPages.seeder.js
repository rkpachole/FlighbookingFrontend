const db = require("../models");
const AdminPages = db.AdminPages;

async function AdminPageSeeder() {
    await AdminPages.create({
      //id: 1,
      name:"Super Admin",
      url : "/home",
      status: true,
      
  });
}
module.exports = AdminPageSeeder;
