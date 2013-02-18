Ext.define('radiss.view.NewEvent',{
extend:'Ext.form.FormPanel',
xtype:'newevent',
requires:['Ext.form.FieldSet','Ext.field.Text'],
config:{
title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
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