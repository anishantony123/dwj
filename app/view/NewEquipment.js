Ext.define('radiss.view.NewEquipment',{
extend:'Ext.form.FormPanel',
xtype:'newEquipment',
id:'newEquipment',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox'],
config:{
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Journal'  
     },
	{
		xtype:'fieldset',
		items:[
			{
			xtype:'fieldset',
			items:[
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
					    	  },
			]},
			{
            xtype: 'button',
            text: 'add',
            action:'saveequipment',
            ui:'button'
			}
   
		]
		},
		
]

}
});
