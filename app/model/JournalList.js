Ext.define('radiss.model.JournalList',{
	extend:'Ext.data.Model',
	config:{
		fields: ['name', 'journal']
	/*		proxy:{			
			url:'tasks.json',
			url:'http://localhost:8085/cisms/rest/tasks',
			type:'rest',
			reader:{
				type:'json'			
				}
			}*/
		}
		
	});

