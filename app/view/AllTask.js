Ext.define('radiss.view.AllTask',{
extend:'Ext.List',
requires:['radiss.view.TaskDetails','radiss.model.AllTask'],
xtype:'alltask',
config:{
	id:'alltask',
	iconCls:'home',
	title:'All Task',	  
    store:'s',
   //grouped: true,
    itemTpl: '<div>{incidentId} {severity} <br/>{summary}</div>',
    onItemDisclosure: true,
    items:[
    	{
                docked: 'top',
                xtype: 'toolbar',
                title: 'Tasks',
                items:[
                	{
                		text:'alltask',
                		id:'alltask1',
                		action:'save',
                		 badgeText: '2'
                	},
                	{
                		text:'my tasks',
                		 badgeText: '4'
                	}
                	]
            }
    	],
    /*	 listeners:{
        'activate':function(record,index){
	console.log("loaded");
	
	Ext.define('AllTask',{
	extend:'Ext.data.Model',
	config:{
		fields:['incidentId','summary','severity'],
			proxy:{			
	//		url:'tasks.json',
			url:'http://localhost:8085/cisms/rest/tasks',
			type:'rest',
			reader:{
				type:'json'			
				}
			}
		}
		
	});
	

				store=Ext.create('Ext.data.Store', {
				    model: 'AllTask'
				});
				
				store.load(1,{success:function(obj){
					console.log("loaded"+obj);
					
				}});

				
				
			
			}}*/
       
	}
	});