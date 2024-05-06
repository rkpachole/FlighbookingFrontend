const db = require("../models");
const AdminRolePermission = db.AdminRolePermission;

async function AdminRolePermissionSeeder() {
    await AdminRolePermission.create({
      role_id: 1,
      permission_id: 1 ,
      status: true,      
  });
}
module.exports = AdminRolePermissionSeeder;
