Ext.define('Rims.store.AllTask',{
	extend:'Ext.data.Store',
	config:{		
	autoLoad: true,
		model:'Rims.model.AllTask',
		proxy:{			
	//		url:'tasks.json',
			url:'http://localhost:8085/cisms/rest/tasks',
			//type:'jsonp',
			//type:'ajax',
			type:'rest',
			reader:{
				rootProperty:'record',
				//type:'json',
				appendId: true, //default
		        noCache: false,
		        limitParam: false,
		        enablePagingParams: false,
		        startParam: false
				}/*,
				 callbackKey : 'callback'*/
			}				
		}
	});