Ext.define('radiss.view.Attachment',{
	extend:'Ext.List',
	xtype:'attachment',
	 
	requires:['Ext.form.FieldSet','Ext.field.Text'],
	config:{			
	title:'Attachment',
	iconCls:'favorites',
	glossOnIcon: false,
	/*onItemDisclosure: true,*/
		store:{
		 fields: ['id','fileName','filePath'],
	        data: [
	           /*
				{id: 1,  fileName: 'FileLink1'},
							   {id: 2,   fileName: 'FileLink2'}*/    
	        ]
		},
	itemTpl:'<span><b>img : </b><img src={fileName} width="20" height="20"></span>',
	items: [{
			xtype: 'toolbar',
	                docked: 'top',
	                title:'Attachment',
	                items: [
	                	/*{
	                    text: 'Delete',
	                    action:'deletejournal'
	                }
	                ,*/{
	                    text: 'Add New',
	                    action:'newAttachment',
	                    
	                }
	                ]
		}]
		
	/*	,
		listeners:{
            itemtap: function(record, index){ 
			
			Ext.create('Ext.Panel', {	
                    	 requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker','Ext.MessageBox'],
					     left: 0,
					     padding: 10,
					     width:500,					     modal:true,
					     hideOnMaskTap: true,
					     items:[
					    	 {
					    		 xtype:'textareafield',
					    		 label:'Journal',
					    		 name:'journal',
					    		 id:'journalText',
					    		 value:record.getStore().getData().items[index].getData().journal
					    	 },
					    	  {
					    		 xtype:'button',
					    		 text:'Update',
					    		 handler:function(){
					    		 console.log(record.getStore().getData().items[index].getData().journal);
					    		 newJournalText=this.getParent().child('#journalText').getValue();
					    		 record.getStore().getData().items[index].set('journal',newJournalText);
					    		 }
					    		
					    	  },
					    	  {
					    		 xtype:'button',
					    		 text:'Delete',
					    		 handler:function(){
					    		 Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			record.getStore().removeAt(index);
						    		 	this.getParent().hide();
						    		 	}
					    		 },this);
					    		 }
					    		
					    	  }
					    	 ]
					 }).showBy(record);
            }
		}*/
	}
	
});