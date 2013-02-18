Ext.define('radiss.view.ActivitiesNtaskForm',{
extend:'Ext.form.FormPanel',
xtype:'activitiesntaskform',
id:'activitiesntaskform',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker','Ext.field.Select'],
config:{
	title:'Proliance Mobile',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Activities and Tasks'  
     },
	{
		xtype:'fieldset',
		items:[
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
					    		 id:'startDateText',
					    		 required:true
					    	  },
					    	  
					    	   {
					    		 xtype:'datepickerfield',
					    		 label:'End Date',
					    		 name:'endDate',
					    		 id:'endDateText',
					    		 required:true
					    	  },
							  {
																			  xtype: 'selectfield',
																			  label: 'Responsible Company',
																			  name:'responsibleCompany',
																			  id:'responsibleCompany',
																			  options: [
																		  {text: 'RER Contractors',  value: 'RER Contractors'},
																			  {text: 'Reed Services',  value: 'Reed Services'}
						 ]}
							  ,
			
			{
            xtype: 'button',
            text: 'Add',
            action:'saveactivities',
            ui:'button'
			}
   
		]
		},
		
]

}
});


