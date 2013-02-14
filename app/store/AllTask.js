Ext.define('radiss.store.AllTask',{
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.Rest'],
	config:{		
	autoLoad: true,	
    autoSync: true,
	model:'radiss.model.AllTask',
	proxy:{			
		//	url:'tasks.json',
			url:'localhost:8085/cisms/rest/task',
			type:'rest',
			reader:{
				type:'json',
				rootProperty:'data'
				}
			}
		}
	});        