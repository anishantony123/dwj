Ext.define('radiss.view.NewVisitorForm',{
extend:'Ext.form.FormPanel',
xtype:'newVisitorForm',
id:'newVisitorForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker'],
config:{
		title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
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
												xtype: 'selectfield',
												label: 'Company',
												name:'company',
												id:'companyText',
												options: [
												{text: 'Select',  value: 'Select'},
												{text: 'RER Contractors',  value: 'RER Contractors'},
												{text: 'Reed Services',  value: 'Reed Services'},
												{text: 'The Design House',  value: 'The Design House'}
											]},
					    	 	 {
					    		 xtype:'textfield',
					    		 label:'Name',
					    		 name:'compName',
					    		 id:'CompanyNameText',
					    		 //value:'Larry A. Petit'
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
												{text: 'Select',  value: 'Select'},
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
					    	  },
			
			{
            xtype: 'button',
            text: 'Add',
            action:'saveVisitor',
            ui:'button'
			}
   
		]
		},
		
]

}
});


