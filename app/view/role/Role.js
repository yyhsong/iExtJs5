/*
 * 视图 - 角色管理
 */

Ext.define("App.view.role.Role", {
	extend: "Ext.grid.Panel",
	xtype: "role",
	id: "roleGrid",
	
	requires: ["App.view.role.RoleModel", "App.view.role.RoleController"],
	viewModel: {
		type: "role"
	},
	controller: "role",
	
	bind: {
		store: "{role}"
	},
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "角色管理",
			border: true,
			columns: [{
				text: "角色编号",
				dataIndex: "id",
				flex: 1
			}, {
				text: "角色名称",
				dataIndex: "roleName",
				flex: 2
			}, {
				text: "角色描述",
				dataIndex: "roleDesc",
				flex: 2
			}, {
				xtype: "actioncolumn",
				text: "操作",
				width: 100,
				align: "center",
				sortable: false,
				menuDisabled: true,
				items: [{
					iconCls: "opt-edit",
					tooltip: "编辑",
					handler: "edit"
				}, {
					iconCls: "opt-delete",
					tooltip: "删除",
					handler: "del"
				}]
			}],
			tbar: [{
				xtype: "textfield",
				maxWidth: 205,
				fieldLabel: "角色编号",
				labelWidth: 60
			}, {
				xtype: "textfield",
				maxWidth: 205,
				fieldLabel: "角色名称",
				labelWidth: 60
			}, {
				xtype: "button",
				text: "搜索",
				glyph: 0xf002,
				handler: "search"
			}, "->", "->", {
				xtype: "button",
				text: "新增",
				glyph: 0xf067,
				handler: "add"
			}, {
				xtype: "button",
				text: "批量删除",
				glyph: 0xf00d,
				handler: "batchDel"
			}],
			bbar: {
				xtype: "pagingtoolbar",
				bind: {
					store: "{role}"
				},
				displayInfo: true
			},
			listeners: {
				itemclick: function(view, record, item, index, e, eOpts) {}
			}
		});
		this.callParent(arguments);
	}
});