Ext.define('radiss.view.ActivitiesNtaskForm',{
extend:'Ext.form.FormPanel',
xtype:'activitiesntaskform',
id:'activitiesntaskform',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker'],
config:{
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
					    		 id:'startDateText'
					    	  },
					    	   {
					    		 xtype:'datepickerfield',
					    		 label:'End Date',
					    		 name:'endDate',
					    		 id:'endDateText'
					    	  },
			
			{
            xtype: 'button',
            text: 'add',
            action:'saveactivities',
            ui:'button'
			}
   
		]
		},
		
]

}
});


