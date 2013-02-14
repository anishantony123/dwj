Ext.define('radiss.view.EditVisitorForm',{
extend:'Ext.form.FormPanel',
xtype:'editVisitorForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','radiss.view.JournalList','Ext.MessageBox'],
config:{
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Visitors',
            items:[
            		{
            			xtype:'button',
            			text:'Delete',
            			action:'deletevisitor',
            			ui:'button'
            		}
            	]
     },
	{
		xtype:'fieldset',
		items:[
			{
			xtype:'fieldset',
			items:[
			{
			xtype:'hiddenfield',
			name:'id'
			},
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
					    	  }
			]},
			{
            xtype: 'button',
            text: 'Update',
            action:'updateVisitor',
            ui:'button'
			}
   
		]
		}
		
]

}
});
