Ext.define('radiss.model.AllTask',{
	extend:'Ext.data.Model',
	config:{
		fields:['incidentId','summary','severity']
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

