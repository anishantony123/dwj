Ext.define('radiss.view.Weatherform',{
extend:'Ext.form.FormPanel',
xtype:'weatherform',
id:'weatherform',
requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker'],
config:{
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
					    		 xtype:'textfield',
					    		 label:'Percipitation',
					    		 name:'precipitation',
					    		 id:'perceptionField'
					    	  },
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
					            xtype: 'button',
					            text: 'add',
					            action:'saveweather',
					            ui:'button'
								}
   
		]
		},
		
]

}
});
