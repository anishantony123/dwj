Ext.define('radiss.view.JournalList',{
	extend:'Ext.List',
	xtype:'listJournal',
	 
	requires:['Ext.form.FieldSet','Ext.field.Text'],
	config:{			
	title:'Journal',
	iconCls:'settings',
	glossOnIcon: false,
	onItemDisclosure: true,
		store:{
		 fields: ['id', 'journal'],
	        data: [
	            {id: 1,  journal: 'Walked Building 1 in the morning. All crews working and expected. Some rail dameged that may require re-grading to prevent future damage Area still complies with storm water management plan'},
	            {id: 2,   journal: 'Walked Building 1 in the morning. All crews working and expected. Some rail dameged that may require re-grading to prevent future damage Area still complies with storm water management plan'}
	            
	        ]
		},
	itemTpl:'<span><font size="2"><b>{journal}</b></font></span>',
	items: [{
			xtype: 'toolbar',
	                docked: 'top',
	                title:'Journal',
	                items: [
	                	/*{
	                    text: 'Delete',
	                    action:'deletejournal'
	                }
	                ,*/{
	                    text: 'Add New',
	                    action:'addjournal',
	                    
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