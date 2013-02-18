Ext.define('radiss.view.EditActivitiesNtaskForm',{
extend:'Ext.form.FormPanel',
xtype:'editactivitiesntaskform',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker','Ext.field.Hidden'],
config:{
	title:'Proliance Mobile',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Activities and Tasks'  ,
             items:[
            		{
            			xtype:'button',
            			text:'Delete',
            			action:'deleteactivities',
            			ui:'button'
            		}
            	]
     },
	{
		xtype:'fieldset',
		items:[
							{
							xtype:'hiddenfield',
							name:'id'
							},
							 {
					    		 xtype:'textfield',
					    		 label:'Task Title',
					    		 name:'taskTitle',
					    		 id:'taskTitleText'
					    	 },
					    	 	 {
					    		 xtype:'textareafield',
					    		 label:'Description',
					    		 name:'description',
					    		 id:'descriptionText'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Worked On',
					    		 name:'workedOn',
					    		 id:'workedOnText'
					    	  },
					    	   {
					    		 xtype:'textfield',
					    		 label:'Percentage',
					    		 name:'percent',
					    		 id:'percentageText'
					    	  },
					    	  {
					    		 xtype:'datepickerfield',
					    		 label:'Start Date',
					    		 name:'startDate',
					    		 id:'startDateText'
					    	  },
					    	   {
					    		 xtype:'datepickerfield',
					    		 label:'End Date',
					    		 name:'endDate',
					    		 id:'endDateText'
					    	  },
					    	  {
												xtype: 'selectfield',
												label: 'Responsible Company',
												name:'responsibleCompany',
												id:'responsibleCompany',
												options: [
												
												{text: 'RER Contractors',  value: 'RER Contractors'},
												{text: 'Reed Services',  value: 'Reed Services'}
											]},
			
			{
            xtype: 'button',
            text: 'Update',
            action:'updateactivities',
            ui:'button'
			}
   
		]
		},
		
]

}
});


