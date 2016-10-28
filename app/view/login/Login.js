Ext.define("App.view.login.Login", {
	extend: "Ext.container.Viewport",
	xtype: "login",
	
	requires: [
		"App.view.login.LoginModel",
		"App.view.login.LoginController"
	],
	viewModel: {
		type: "login"
	},
	controller: "login",
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: "window",
				title: "用户登录",
				width: 400,
				height: 270,
				autoShow: true,
				closable: false,
				resizable: false,
				constrain: true,
				iconCls: "icon-user",
				cls: "login-win",
				items: [{
					xtype: "image",
					src: "img/logo.png",
					height: 60,
					cls: "login-logo"
				}, {
					xtype: "form",
					reference: "loginForm",
					defaultType: "textfield",
					fieldDefaults: {
						anchor: "100%",
						margin: 15,
						labelWidth: 60,
						allowBlank: false
					},
					items: [{
						name: "username",
						fieldLabel: "用户名",
						bind: "{username}",
						listeners: {
							specialKey: "onSpecialKey"
						}
					}, {
						name: "password",
						inputType: "password",
						fieldLabel: "密码",
						bind: "{password}",
						listeners: {
							specialKey: "onSpecialKey"
						}
					}]
				}],
				buttonAlign: "center",
				buttons: [{
					text: "登录",
					handler: "onLogin"
				}]
			}]
		});
		this.callParent(arguments);
	}
});