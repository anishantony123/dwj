Ext.define('radiss.view.MainTask',{
extend:'Ext.form.FormPanel',
xtype:'maintask',
requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker','Ext.Viewport'],
config:{
title:'Main',
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
	               
        },
	{
	xtype:'fieldset',
	title:'Details',
		items:[
			{
			xtype:'textfield',
			name:'current State',
			label:'Current State',
			edit:false,
			readOnly: true
			},
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
					xtype: 'selectfield',
                    label: 'Set Name',
                    options: [
                        {text: 'PM Crew',  value: 'pmcrew1'},
                        {text: 'PM Crew2', value: 'pmcrew2'},
                        {text: 'PM Crew3',  value: 'pmcrew3'}
                    ]
			},
			
			{
					xtype: 'selectfield',
                    label: 'Prepared By Company',
                    options: [
                        {text: 'Lakewood',  value: 'lakewood'},
                        {text: 'AEM', value: 'aem'},
                        {text: 'Toyota Motor',  value: 'toyotaMotor'}
                    ]
			},
			
			{
					xtype: 'selectfield',
                    label: 'Prepared By Contact',
                    options: [
                        {text: 'Mark A Rutherford',  value: 'markARutherford'},
                        {text: 'Jeff Sutherland', value: 'jeffSutherland'},
                        {text: 'John Mclane',  value: 'johnMclane'}
                    ]
			},
			{
					xtype: 'selectfield',
                    label: 'Reason',
                    options: [
                        {text: 'Reason 1',  value: 'first'},
                        {text: 'Reason 2', value: 'second'},
                        {text: 'Reason 3',  value: 'third'}
                    ]
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