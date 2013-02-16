Ext.define('radiss.view.NewLabourForm',{
extend:'Ext.form.FormPanel',
xtype:'newLabourForm',
id:'newLabourForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker'],
config:{
		title:'DWJ Demo',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Labor'  
     },
	{
		xtype:'fieldset',
		items:[
							 {
					    		 xtype:'selectfield',
					    		 label:'Company',
					    		 name:'company',
					    		 id:'companyText',
					    		 options: [
												
												{text: 'RER Contractors',  value: 'RER Contractors'},
												{text: 'Reed Services',  value: 'Reed Services'}
											]
					    	 },
					    	 	 {
					    		 xtype:'textfield',
					    		 label:'Contract',
					    		 name:'contract',
					    		 id:'ContractText'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Count',
					    		 name:'count',
					    		 id:'countText'
					    	  },
					    	   {
					    		 xtype:'textfield',
					    		 label:'UOM',
					    		 name:'uom',
					    		 id:'uomText'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Notes',
					    		 name:'notes',
					    		 id:'notesText'
					    	  },
					    	   {
					    		 xtype:'selectfield',
					    		 label:'Trade',
					    		 name:'trade',
					    		 id:'tradeText',
					    		 options: [
												
												{text: 'CF: Concrete Finisher',  value: 'CF: Concrete Finisher'},
												{text: 'EL: Electrician',  value: 'EL: Electrician'},
												{text: 'IW: Iron Worker',  value: 'IW: Iron Worker'},
												{text: 'LA: Laborer',  value: 'LA: Laborer'},
												{text: 'OP: Equipment Operator',  value: 'OP: Equipment Operator'}
											]
					    	  },
					    	  {
					    		 xtype:'selectfield',
					    		 label:'Work Area',
					    		 name:'workArea',
					    		 id:'workAreaText',
					    		 options: [
												
												{text: 'BDG: Building',  value: 'BDG: Building'},
												{text: 'BRG: Bridge',  value: 'BRG: Bridge'},
												{text: 'RDW: Roadway',  value: 'RDW: Roadway'}
											]
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Work Category',
					    		 name:'workCategory',
					    		 id:'workCategoryText'
					    	  },
			
			{
            xtype: 'button',
            text: 'Add',
            action:'saveLabour',
            ui:'button'
			}
   
		]
		},
		
]

}
});


