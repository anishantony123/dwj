Ext.define('radiss.view.NewEvent',{
extend:'Ext.form.FormPanel',
xtype:'newevent',
requires:['Ext.form.FieldSet','Ext.field.Text'],
config:{
title:'New Event',
left: 0,
padding: 10,
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'New Event'
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
            text: 'Close',
            action:'closeevent',
            ui:'button'
            }
]
}
});