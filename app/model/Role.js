/* 
 * 数据模型 - 角色
 */

Ext.define("App.model.Role", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "roleName"},
	    {name: "roleDesc"}
	]
});