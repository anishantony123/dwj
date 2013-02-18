Ext.define('radiss.view.EditJournal',{
extend:'Ext.form.FormPanel',
xtype:'editjournal',
requires:['Ext.form.FieldSet','Ext.field.TextArea','radiss.view.JournalList','Ext.MessageBox'],
config:{
title:'Proliance Mobile',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Journal',
            items:[
            		{
            			xtype:'button',
            			text:'Delete',
            			action:'deletejournal',
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
			xtype:'textareafield',
			name:'journal',
			label:'Journal',
			required:true
			}
			]},
			{
            xtype: 'button',
            text: 'Update',
            action:'updatejournal',
            ui:'button'
			}
   
		]
		}
		
]

}
});
