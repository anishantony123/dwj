Ext.define('radiss.view.Settings',{
extend:'Ext.form.FormPanel',
xtype:'settings',
requires:['Ext.form.FieldSet','Ext.field.Text'],
config:{
title:'Settings',
iconCls:'settings',
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Settings'
        },
	{
	xtype:'fieldset',
		items:[
			{
			xtype:'textfield',
			name:'host',
			label:'Host',
			required:true
			},
			{
			xtype:'textfield',
			name:'port',
			label:'Port',
			required:true
			}
		]
		},
		{
            xtype: 'button',
            text: 'Save',
            action:'savesettings',
            ui:'button'
            }
]
}
});