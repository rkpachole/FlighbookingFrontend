const db = require("../models");
const AdminPagePermission = db.AdminPagePermission;

async function AdminPagePermissionSeeder() {
    await AdminPagePermission.create({
      page_id : 1,
      name:"['EDIT,VIEW']",      
      status: true,
      
  });
}
module.exports = AdminPagePermissionSeeder;
