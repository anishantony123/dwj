Ext.define('radiss.view.EditActivitiesNtaskForm',{
extend:'Ext.form.FormPanel',
xtype:'editactivitiesntaskform',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker','Ext.field.Hidden'],
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


