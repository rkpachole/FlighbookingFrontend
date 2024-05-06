const db = require("../models");
const AdminRoles = db.AdminRoles;

async function AdminSeeder() {
    await AdminRoles.create({
      name:"Super Admin",
      url:"Super Admin",
      status: true,
      
  });
}
module.exports = AdminSeeder;
