Ext.define('radiss.view.EditEquipment',{
extend:'Ext.form.FormPanel',
xtype:'editequipment',
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
												xtype: 'selectfield',
												label: 'Equipment',
												name:'Equipment',
												id:'equipmentField',
												options: [
												{text: 'E01: Bulldozer',  value: 'E01: Bulldozer'},
												{text: 'E02: Excavator',  value: 'E02: Excavator'},
												{text: 'E03: Grader', value: 'E03: Grader'},
												{text: 'E04: Generator',  value: 'E04: Generator'},
												{text: 'E05: Portable Lighting',  value: 'E05: Portable Lighting'}
											]}, {
												xtype: 'selectfield',
												label: 'Operating Company',
												name:'OperatingCompany',
												id:'operatingCompanyField',
												options: [
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

					    	  }, {
												xtype: 'selectfield',
												label: 'Area/Zone',
												name:'areazone',
												id:'areazone',
												options: [
												
												{text: 'BDG: Building',  value: 'BDG: Building'},
												{text: 'BRG: Bridge',  value: 'BRG: Bridge'},
												{text: 'RDW: Roadway',  value: 'RDW: Roadway'}
											]},
					    	   {
					    		 xtype:'textfield',
					    		 label:'Area/Zone',
					    		 name:'areazone',
					    		 id:'areazone'

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
