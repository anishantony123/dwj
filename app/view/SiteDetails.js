Ext.define('radiss.view.SiteDetails',{
extend:'Ext.form.FormPanel',
xtype:'sitedetails',
requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker','Ext.Viewport'],
config:{
title:'Proliance Mobile',
iconCls:'home',
//standardSubmit:true,
items:[
		{
            docked: 'top',
            xtype: 'toolbar',
             items: [
            	{xtype:'spacer'},
            	{
            		xtype:'segmentedbutton',
            		allowDepress: true,
            		items: [
            			{
            				text: 'Details',
            				action:'detailSettings',
            				
            			},
            			{
            				text: 'Site',
            				pressed:'true'
            			}
            			,
            			{
            				text: 'Project',
            				//action:'projectDetails'
            			},

            			{
            				text: 'Document',
            				//action:'docSettings'
            			}

            			

            			]
            	},
            	{xtype:'spacer'}
            	]
   
	                
        },
	
		{
	xtype:'fieldset',
		items:[
			{
			xtype:'textareafield',
			name:'siteLocation',
			label:'Site Location',
			required:true
			},
			{
			xtype:'textareafield',
			name:'SiteNotes',
			label:'Site Notes',
			required:true
			}
		]
		},
		{
            xtype: 'button',
            text: 'Save',
            action:'saveDetails',
            ui:'button'
            }
]
}
});