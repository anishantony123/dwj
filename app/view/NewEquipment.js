Ext.define('radiss.view.NewEquipment',{
extend:'Ext.form.FormPanel',
xtype:'newEquipment',
id:'newEquipment',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox'],
config:{
title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Equipment'  
     },
	{
		xtype:'fieldset',
		items:[
			{
			xtype:'fieldset',
			items:[
			 {
												xtype: 'selectfield',
												label: 'Equipment',
												name:'Equipment',
												id:'equipmentField',
												options: [
												{text: 'Select',  value: 'Select'},
												{text: 'E01: Bulldozer',  value: 'E01: Bulldozer'},
												{text: 'E02: Excavator',  value: 'E02: Excavator'},
												{text: 'E03: Grader', value: 'E03: Grader'},
												{text: 'E04: Generator',  value: 'E04: Generator'},
												{text: 'E05: Portable Lighting',  value: 'E05: Portable Lighting'}
											]},
					    	 {
												xtype: 'selectfield',
												label: 'Operating Company',
												name:'OperatingCompany',
												id:'operatingCompanyField',
												options: [
												{text: 'Select',  value: 'Select'},
												{text: 'RER Contractors',  value: 'RER Contractors'},
												{text: 'Reed Services',  value: 'Reed Services'}
											]},
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
												xtype: 'selectfield',
												label: 'Area/Zone',
												name:'areazone',
												id:'areazone',
												options: [
												{text: 'Select',  value: 'Select'},
												{text: 'BDG: Building',  value: 'BDG: Building'},
												{text: 'BRG: Bridge',  value: 'BRG: Bridge'},
												{text: 'RDW: Roadway',  value: 'RDW: Roadway'}
											]},
					    	  {
					    		 xtype:'textfield',
					    		 label:'Quantity',
					    		 name:'qty',
					    		 id:'qtyField'
					    	  },
			]},
			{
            xtype: 'button',
            text: 'Add',
            action:'saveequipment',
            ui:'button'
			}
   
		]
		},
		
]

}
});
