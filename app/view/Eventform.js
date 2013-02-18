Ext.define('radiss.view.Eventform',{
extend:'Ext.form.FormPanel',
xtype:'eventform',
id:'eventform',
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
            title: 'Events'
           
     },
	{
		xtype:'fieldset',
		items:[
			{
			xtype:'fieldset',
			items:[
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
            text: 'Add',
            action:'saveevent',
            ui:'button'
			}
   
		]
		},
		
]

}
});
