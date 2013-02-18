Ext.define('radiss.view.EditVisitorForm',{
extend:'Ext.form.FormPanel',
xtype:'editVisitorForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','radiss.view.JournalList','Ext.MessageBox'],
config:{
		title:'Proliance Mobile',
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
												xtype: 'selectfield',
												label: 'Company',
												name:'company',
												id:'companyText',
												options: [
												
												{text: 'RER Contractors',  value: 'RER Contractors'},
												{text: 'Reed Services',  value: 'Reed Services'},
												{text: 'The Design House',  value: 'The Design House'}
											]},
					    	 	 {
					    		 xtype:'textfield',
					    		 label:'Name',
					    		 name:'compName',
					    		 id:'CompanyNameText'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Purpose of Visit',
					    		 name:'purposeOfVisit',
					    		 id:'purposeOfVisitText'
					    	  },
					    	  {
					    		 xtype:'selectfield',
					    		 label:'To See',
					    		 name:'toSee',
					    		 id:'toSeeText',
					    		 options: [
												
												{text: 'Adam Johnson',  value: 'Adam Johnson'},
												{text: 'Brad Green',  value: 'Brad Green'},
												{text: 'John Smith',  value: 'John Smith'},
												{text: 'Bill Rice',  value: 'Bill Rice'}
											]
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Arrival Time',
					    		 name:'arrivalTime',
					    		 id:'arrivalTimeText'
					    	  },
					    	   {
					    		 xtype:'textfield',
					    		 label:'Departure Time',
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
