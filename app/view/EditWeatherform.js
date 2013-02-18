Ext.define('radiss.view.EditWeatherform',{
extend:'Ext.form.FormPanel',
xtype:'editweatherform',
//id:'editweatherform',
requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker','Ext.field.Hidden'],
config:{
title:'Proliance Mobile',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Weather',
            items:[
            	{
            		stype:'button',
            		text:'Delete',
            		action:'deleteWeather'
            	}
            	]
     },
	{
		xtype:'fieldset',
			items:[
								{
								xtype:'hiddenfield',
								name:'id'
								},
				
							{
					    		 xtype:'textfield',
					    		 label:'From Time',
					    		 name:'fromTime',
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'To Time',
					    		 name:'toTime',
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Note',
					    		 name:'notes',
					    	  } ,{
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
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Snowfall',
					    		 name:'snowfall',
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Low Temparature',
					    		 name:'lowTemp',
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'High Temparature',
					    		 name:'highTemp',
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Wind Scale',
					    		 name:'windScale',
					    		 id:'windScale'
					    	  },
					    	  {
					            xtype: 'button',
					            text: 'Update',
					            action:'updateweather',
					            ui:'button'
								}
   
		]
		},
		
]

}
});
