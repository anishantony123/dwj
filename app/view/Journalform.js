Ext.define('radiss.view.Journalform',{
extend:'Ext.form.FormPanel',
xtype:'journalform',
requires:['Ext.form.FieldSet','Ext.field.TextArea'],
config:{
title:'Journalform',
iconCls:'settings',
//standardSubmit:true,
items:[
	
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Journal',
            items:[
            	{
            		xype:'button',
            		text:'delete'
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
			xtype:'textareafield',
			name:'journal',
			label:'Journal',
			required:true
			}
			]},
			{
            xtype: 'button',
            text: 'add',
            action:'savejournal',
            ui:'button'
			}
   
		]
		},
		
]

}
});
