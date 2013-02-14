Ext.define('radiss.view.EditLabourForm',{
extend:'Ext.form.FormPanel',
xtype:'editLabourForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','radiss.view.JournalList','Ext.MessageBox'],
config:{
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Labour',
            items:[
            		{
            			xtype:'button',
            			text:'Delete',
            			action:'deletelabour',
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
					    	  }
			]},
			{
            xtype: 'button',
            text: 'Update',
            action:'updateLabour',
            ui:'button'
			}
   
		]
		}
		
]

}
});
