Ext.define('radiss.view.MainTask',{
extend:'Ext.form.FormPanel',
xtype:'maintask',
requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker','Ext.Viewport','Ext.field.Select'],
config:{
title:'Main',
iconCls:'home',
//standardSubmit:true,

items:[
{
	xtype: 'toolbar',
            docked: 'top',
            title: 'Main',
            items:[{xtype:'spacer'},
            		{
            			xtype:'button',
            			text:'Settings',
            			action:'showSettings',
            			ui:'button'
            		}
            	]
     },
		/*
		{
					docked: 'top',
					xtype: 'toolbar',
					title:'Main',
							items: [{
								text: 'Add New',
								action:'newLabour'
							}],
							  items: [
						{xtype:'spacer'},
						/*
						{
											xtype:'segmentedbutton',
											allowDepress: true,
											items: [
												{
													text: 'Details',
													pressed:'true'
												},
												{
													text: 'Site',
													action:'LoadSiteDetails'
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
											 }*/
		
	{
	xtype:'fieldset',
	title:'Details',
		items:[
			/*
			{
						xtype:'textfield',
						name:'current State',
						label:'Current State',
						edit:false,
						readOnly: true
						},*/
			
			{
			xtype:'textfield',
			name:'title',
			label:'Title',
			required:true
			},
			{
			xtype:'textfield',
			name:'number',
			label:'Number',
			required:true
			},
			{
			xtype:'datepickerfield',
			name:'journalDate',
			label:'Journal Date',
			required:true,
			value:new Date()
			}
			,
			{
					xtype: 'textfield',
                    label: 'Set Name',
                    name:'number',
			},
			
			{
					xtype:'textfield',
					name:'preparedByCompany',
					label:'Prepared by Company',
					value:'ISTHA'
			},
			
			{
					xtype:'textfield',
					name:'preparedByContact',
                    label: 'Prepared By Contact',
					value:'Adam Johnson'
			},
			{
					xtype:'textfield',
					name:'reason',
                    label: 'Reason',
                    
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