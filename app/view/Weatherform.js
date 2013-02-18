Ext.define('radiss.view.Weatherform',{
extend:'Ext.form.FormPanel',
xtype:'weatherform',
id:'weatherform',
requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker'],
config:{
title:'Proliance Mobile',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Weather'  
     },
	{
		xtype:'fieldset',
			items:[
						{
					    		 xtype:'textfield',
					    		 label:'From Time',
					    		 name:'fromTime',
					    		 //value:new Date().getTime(),
					    		 id:'fromDateField'
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'To Time',
					    		 name:'toTime',
					    		 //value:new Date(),
					    		 id:'toDateField'
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Note',
					    		 name:'notes',
					    		 id:'notefield'
					    	  },
					    	   
		
					    
							 {
												xtype: 'selectfield',
												label: 'Percipitation',
												name:'precipitation',
												id:'perceptionField',
												options: [
												{text: 'Drizzle: Drizzle',  value: 'Drizzle: Drizzle'},
												{text: 'Flurries: Flurries',  value: 'Flurries: Flurries'},
												{text: 'Rain: Rain', value: 'Rain: Rain'},
												{text: 'Showers: Showers',  value: 'Showers: Showers'},
												{text: 'Sleet: Sleet',  value: 'Sleet: Sleet'},
												{text: 'Snow: Snow',  value: 'Snow: Snow'}
											]},
					    	  {
					    		 xtype:'textfield',
					    		 label:'Rainfall',
					    		 name:'rainfall',
					    		 id:'rainfallField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Snowfall',
					    		 name:'snowfall',
					    		 id:'snowfallField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Low Temparature',
					    		 name:'lowTemp',
					    		 id:'lowTemp'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'High Temparature',
					    		 name:'highTemp',
					    		 id:'highTemp'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Wind Scale',
					    		 name:'windScale',
					    		 id:'windScale'
					    	  },
								{
					            xtype: 'button',
					            text: 'Add',
					            action:'saveweather',
					            ui:'button'
								}
   
		]
		},
		
]

}
});
