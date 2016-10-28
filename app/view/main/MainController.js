/* 
 * 视图控制器 - 系统主页
 */

Ext.define("App.view.main.MainController", {
	extend: "Ext.app.ViewController",
	alias: "controller.main",
	
	//点击菜单
	onMenuClick: function(view, rec, item, index) {
		var me = this;
		if(rec.data.mod && rec.data.modUrl) {
			var mod = rec.data.mod;
			var modUrl = "App.view." + rec.data.modUrl;
			Ext.require([modUrl], function() {
				me.loadModule(mod);
			});
		}else {
			//Ext.Msg.alert("错误", "加载模块失败！");
		}
	},
	
	//加载模块
	loadModule: function(mod) {
		var me = this;
		if(!me.con) {
			me.con = Ext.getCmp("mainContent");
		}
		me.con.removeAll();
		me.con.add({xtype: mod});
	},
	
	//退出系统
	exitSys: function() {
		this.getView().destroy();
		Ext.create("App.view.login.Login");
	}
});