Ext.define('radiss.view.EditEquipment',{
extend:'Ext.form.FormPanel',
xtype:'editequipment',
requires:['Ext.form.FieldSet','Ext.field.TextArea','radiss.view.JournalList','Ext.MessageBox'],
config:{
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Equipment',
            items:[
            		{
            			xtype:'button',
            			text:'Delete',
            			action:'equipmentsDelete',
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
					    		 label:'Equipment',
					    		 name:'Equipment',
					    		 id:'equipmentField'
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Operating Company',
					    		 name:'OperatingCompany',
					    		 id:'operatingCompanyField'
					    	 },
					    	   {
					    		 xtype:'textfield',
					    		 label:'Equipment Status',
					    		 name:'EquiStatus',
					    		 id:'EquiStatusField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Regular Rate',
					    		 name:'RegRate',
					    		 id:'regRateField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Overtime Rate',
					    		 name:'OverRate',
					    		 id:'ovrRateField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Quantity',
					    		 name:'qty',
					    		 id:'qtyField'
					    	  }
			]},
			{
            xtype: 'button',
            text: 'Update',
            action:'updateequipment',
            ui:'button'
			}
   
		]
		}
		
]

}
});
