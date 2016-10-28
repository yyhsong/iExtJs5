/*
 * 视图模型 - 用户管理
 */

Ext.define("App.view.user.UserModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.user",
	requires: ["App.store.User", "App.store.Role"],
	
	data: {},
	
	stores: {
		user: {
			type: "user",
			pageSize: 10,
			autoLoad: true
		},
		role: {
			type: "role",
			autoLoad: true
		},
		state: Ext.create("Ext.data.Store", {
			fields: ["stateId", "stateName"],
			data: [
				["0", "启用"],
				["1", "禁用"]
			]
		})
	}
});
