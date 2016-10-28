/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.role.RoleWin", {
	extend: "Ext.window.Window",
	xtype: "rolewin",
	
	requires: ["App.view.role.RoleModel", "App.view.role.RoleController"],
	viewModel: {
		type: "role"
	},
	controller: "role",
	
	title: "新增角色",
	width: 600,
	height: 250,
	resizable: false,
	constrain: true,
	modal: true,
	/*
	tools: [{
		type: "refresh",
		tooltip: "刷新数据"
	}],
	*/
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: "form",
				reference: "roleForm",
				margin: 10,
				defaults: {
					anchor: "100%"
				},
				fieldDefaults: {
					flex: 1,
					margin: 10,
					labelWidth: 60,
					allowBlank: false
				},
				items: [{
					xtype: "container",
					layout: {
						type: "hbox",
						align: "stretch"
					},
					items: [{
						xtype: "hiddenfield",
						name: "id",
						value: ""
					}, {
						xtype: "textfield",
						name: "roleName",
						fieldLabel: "角色名称"
					}]
				}, {
					xtype: "container",
					layout: {
						type: "hbox",
						align: "stretch"
					},
					items: [{
						xtype: "textarea",
						name: "roleDesc",
						fieldLabel: "角色描述",
						grow: false,
						allowBlank: true
					}]
				}]
			}],
			buttonAlign: "center",
			buttons: [{
				text: "保存",
				handler: "save"
			}, {
				text: "取消",
				handler: "cancel"
			}]
		});
		this.callParent(arguments);
	}
});
