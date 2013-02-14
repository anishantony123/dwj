Ext.define('radiss.view.NewLabourForm',{
extend:'Ext.form.FormPanel',
xtype:'newLabourForm',
id:'newLabourForm',
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
					    		 xtype:'textfield',
					    		 label:'Trade',
					    		 name:'trade',
					    		 id:'tradeText'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Work Area',
					    		 name:'workArea',
					    		 id:'workAreaText'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Work Category',
					    		 name:'workCategory',
					    		 id:'workCategoryText'
					    	  },
			
			{
            xtype: 'button',
            text: 'add',
            action:'saveLabour',
            ui:'button'
			}
   
		]
		},
		
]

}
});


