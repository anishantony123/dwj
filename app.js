
Ext.application({
		name:'radiss',
		controllers: ['Main'],

	   	views:['MainLayout','LoginLayout','Journal'],

	  	models:['MainTask'],
	   	stores:['MainTask'],
		/*launch:function(){
			Ext.create('radiss.view.MainLayout');	
			Ext.create('radiss.view.Main');	
			}	*/	
			launch: function () {

        Ext.Viewport.add([
            { xtype: 'loginlayout' },
            { xtype: 'mainlayout' }
        ]);
    }
	});