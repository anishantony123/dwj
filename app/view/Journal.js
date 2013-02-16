Ext.define('radiss.view.Journal',{
extend:'Ext.form.FormPanel',
xtype:'journal',
id:'journal',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','radiss.view.EditJournal'],
config:{
title:'DWJ Demo',
/*iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Journal'  
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
            text: 'Add',
            action:'savejournal',
            ui:'button'
			}
   
		]
		},
		
]

}
});
