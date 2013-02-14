Ext.define('radiss.view.EditWeatherform',{
extend:'Ext.form.FormPanel',
xtype:'editweatherform',
//id:'editweatherform',
requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker','Ext.field.Hidden'],
config:{
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
					    	  },
					    	   {
					    		 xtype:'textfield',
					    		 label:'Percipitation',
					    		 name:'precipitation',
					    	  },
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
					            xtype: 'button',
					            text: 'update',
					            action:'updateweather',
					            ui:'button'
								}
   
		]
		},
		
]

}
});
