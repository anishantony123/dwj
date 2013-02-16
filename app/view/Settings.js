Ext.define('radiss.view.Settings',{
extend:'Ext.form.Panel',
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
			required:true,
			value:'rakesh'
			},
			{
			xtype:'textfield',
			name:'port',
			label:'Port',
			required:true,
			value:'rakeshzzzzz'
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