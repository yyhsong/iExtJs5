/*
 * 导航菜单
 */

Ext.define("App.view.main.Nav", {
	extend: "Ext.tree.Panel",
	xtype: "nav",
	id: "nav",
	
	initComponent: function() {
		//导航菜单Store
		var navStore = Ext.create("Ext.data.TreeStore", {
			model: "Ext.data.TreeModel",
			proxy: {
				type: "ajax",
				reader: "json",
				url: "data/nav.json"
			}
			
//			root: {
//				expanded: true,
//				children: [{
//					text: "首页",
//					leaf: true,
//					cls: "node-link",
//					mod: "desktop",
//					modUrl: "desktop.Desktop"
//				}, {
//					text: "系统管理",
//					expanded: true,
//					cls: "node-link",
//					children: [{
//						text: "角色管理",
//						leaf: true,
//						cls: "node-link",
//						mod: "role",
//						modUrl: "role.Role"
//					}, {
//						text: "用户管理",
//						leaf: true,
//						cls: "node-link",
//						mod: "user",
//						modUrl: "user.User"
//					}]
//				}, {
//					text: "文章管理",
//					expanded: true,
//					children: [{
//						text: "文章列表",
//						leaf: true
//					}, {
//						text: "发布文章",
//						leaf: true
//					}]
//				}, {
//					text: "产品管理",
//					expanded: true,
//					children: [{
//						text: "产品列表",
//						leaf: true
//					}, {
//						text: "新增产品",
//						leaf: true
//					}, {
//						text: "产品监控",
//						leaf: true
//					}]
//				}, {
//					text: "报表管理",
//					expanded: true,
//					children: [{
//						text: "生成报表",
//						leaf: true
//					}, {
//						text: "报表统计",
//						leaf: true
//					}, {
//						text: "报表打印",
//						leaf: true
//					}]
//				}]
//			}
		});
		
		Ext.apply(this, {
			title: "导航菜单",
			collapsible: true,
			//split: true,
			autoScroll: true,
			margin: "0 5 0 5",
			width: 225,
			border: true,
			rootVisible: false,
			store: navStore,
			listeners: {
				itemclick: "onMenuClick"
			}
		});
		this.callParent(arguments);
	}
});
