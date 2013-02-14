
Ext.define('radiss.view.MainLayout',{
extend: 'Ext.navigation.View',
requires:['radiss.view.Main'],
xtype:'mainlayout',
config:{
	fullscreen:true,
	defaultBackButtonText:'Back',
	
	items:[{
			xtype:'mainpanel'	,	
			}
			]
	}
	});