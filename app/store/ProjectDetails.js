Ext.define('Rims.store.ProjectDetails',{
	extend:'Ext.data.Store',
	xtype:'projectDetailsStore',
	config:{		
	autoLoad: true,
		model:'Rims.model.ProjectDetails',
		proxy:{			
			url:'http://fullorbis.com/matherapp/projectdetails.php',
			type:'jsonp',
			reader:{
				rootProperty:'record',
				type:'json'				
				},
				callbackKey : 'callback'
			}		
		}
	});