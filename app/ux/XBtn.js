Ext.define("App.ux.XBtn", {
	extend: "Ext.button.Button",
	xtype: "xbtn",
	
	initComponent: function() {
		//设置事件监听
        this.listeners = {
            //鼠标移开，还原按钮样式
            mouseout: function () {
                this.setDefault(document.getElementById(this.id));
            },
            //鼠标悬停，添加按钮样式
            mouseover: function () {
            	var btn = document.getElementById(this.id);
                btn.style.backgroundImage = 'none';
                btn.style.backgroundColor = '#990000';
                btn.style.borderColor = '#660000';
            },
            //初始化
            afterrender: function () {}
        };
		this.callParent(arguments);
	},
	setDefault: function (btn) {
        btn.style.backgroundImage = '';
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
    }
});
