/*
 * 页面头部
 */

Ext.define("App.view.main.Top", {
	extend: "Ext.container.Container",
	xtype: "top",
	id: "top",
	uses: ["App.ux.XBtn"],
	
	initComponent: function() {
		Ext.apply(this, {
			height: 40,
			border: false,
			layout: "auto",
			items: [{
				xtype: "image",
				src: "img/logo.png",
				cls: "main-logo"
			}, {
				xtype: "container",
				cls: "top-tool",
				items: [{
					xtype: "label",
					html: "<i class='icon-user'></i> 欢迎您，Neo"
				}, {
					xtype: "xbtn",
					text: "退出",
					glyph: 0xf011,
					handler: "exitSys"
				}]
			}]
		}); 
		this.callParent(arguments);
	}
});
