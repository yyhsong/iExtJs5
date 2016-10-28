/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.role.RoleModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.role",
	requires: ["App.store.Role"],
	
	data: {},
	
	stores: {
		role: {
			type: "role",
			pageSize: 10,
			autoLoad: true
		}
	}
});
