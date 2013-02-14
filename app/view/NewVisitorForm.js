Ext.define('radiss.view.NewVisitorForm',{
extend:'Ext.form.FormPanel',
xtype:'newVisitorForm',
id:'newVisitorForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker'],
config:{
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Visitors'  
     },
	{
		xtype:'fieldset',
		items:[
							 {
					    		 xtype:'textfield',
					    		 label:'Company',
					    		 name:'company',
					    		 id:'companyText'
					    	 },
					    	 	 {
					    		 xtype:'textfield',
					    		 label:'Company Name',
					    		 name:'compName',
					    		 id:'CompanyNameText'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Purpose Of Visit',
					    		 name:'purposeOfVisit',
					    		 id:'purposeOfVisitText'
					    	  },
					    	   {
					    		 xtype:'textfield',
					    		 label:'To See',
					    		 name:'toSee',
					    		 id:'toSeeText'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Arrival Time',
					    		 name:'arrivalTime',
					    		 id:'arrivalTimeText'
					    	  },
					    	   {
					    		 xtype:'textfield',
					    		 label:'Depature Time',
					    		 name:'depatureTime',
					    		 id:'depatureTimeText'
					    	  },
			
			{
            xtype: 'button',
            text: 'add',
            action:'saveVisitor',
            ui:'button'
			}
   
		]
		},
		
]

}
});


