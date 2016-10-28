/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Role", {
	extend: "Ext.data.Store",
	alias: "store.role",
	
	model: "App.model.Role",
	proxy: {
		type: "ajax",
		url: "data/role.json", //模拟后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});