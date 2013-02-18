Ext.define('radiss.view.EditLabourForm',{
extend:'Ext.form.FormPanel',
xtype:'editLabourForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','radiss.view.JournalList','Ext.MessageBox'],
config:{
		title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Labor',
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
