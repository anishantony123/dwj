Ext.define('radiss.view.EditEventform',{
extend:'Ext.form.FormPanel',
xtype:'editeventform',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.Hidden'],
config:{
	title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Events',
            items:[
            	{
            		xtype:'button',
            		text:'Delete',
            		action:'eventsDelete'
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
					    		 label:'Event Time',
					    		 name:'EventTime',
					    		 id:'eventTime'
					    		
					    	 },
					    	 	 {
					    		 xtype:'textareafield',
					    		 label:'Event Notes',
					    		 name:'EventNotes',
					    		 id:'eventNotesText'
					    	  },
			]},
			{
            xtype: 'button',
            text: 'Update',
            action:'updateevent',
            ui:'button'
			}
   
		]
		},
		
]

}
});
