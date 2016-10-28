/*
 * 主题内容
 */

Ext.define("App.view.main.Content", {
	extend: "Ext.container.Container",
	xtype: "content",
	id: "mainContent",
	uses: ["App.view.role.Role"],
	
	initComponent: function() {
		Ext.apply(this, {
			border: false,
			margin: "0 5 0 0",
			layout: "fit",
			items: [{
				xtype: "role"
			}]
		});
		this.callParent(arguments);
	}
});
