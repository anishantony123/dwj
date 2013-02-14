Ext.define('radiss.view.DataList',{
	extend:'Ext.DataView',
	xtype:'datalist',
	fullscreen:true,
	config:{			
		title:'data',
		store:{
		 fields: ['name', 'journal'],
	        data: [
	            {name: 'Jamie',  journal: 100},
	            {name: 'Rob',   journal: 21},
	            {name: 'Tommy', journal: 24},
	            {name: 'Jacky', journal: 24},
	            {name: 'Ed',   journal: 26}
	        ]
		},
	itemTpl:'<span>name<b>{journal}</b></span>'
	}
	
});