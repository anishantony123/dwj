Ext.define('radiss.store.JournalList',{
	extend:'Ext.data.Store',
	//requires:['Ext.data.proxy.Rest'],
	config:{		
	//autoLoad: true,	
   // autoSync: true,
	//model:'radiss.model.JournalList',
	fields: ['name', 'journal'],
	        data: [
	            {name: 'Jamie',  journal: 100},
	            {name: 'Rob',   journal: 21},
	            {name: 'Tommy', journal: 24},
	            {name: 'Jacky', journal: 24},
	            {name: 'Ed',   journal: 26}
	        ]
/*	proxy:{			
			url:'tasks.json',
			url:'localhost:8085/cisms/rest/task',
			type:'rest',
			reader:{
				type:'json',
				rootProperty:'data'
				}
			}*/
		}
	});        