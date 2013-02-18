Ext.define('radiss.view.ConfigurationForm',{
extend:'Ext.form.FormPanel',
xtype:'configurationform',
requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker','Ext.Viewport','Ext.field.Select'],
config:{
title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
store:{
		 fields: ['id', 'mime','url','contentType','characterType'],
	        data: [
	        {id: 1,  mime: 'Yes',url: 'Concrete Footing east side', contentType:'1', characterType:'Some description about task one'}
	           /*
				{id: 1,  workedOn: 'Yes',taskTitle: 'Concrete Footing east side', taskId:'1', description:'Some description about task one', percent:'22',startDate:new Date(),endDate:new Date(),responsibleCompany:'AEM'},
							   {id: 2,  workedOn: 'No',taskTitle: 'Electrical trenches main service', taskId:'1', description:'More description about second one',startDate:new Date(),endDate:new Date(),responsibleCompany:'AEM'}*/
			   
	            
	        ]
		},
//standardSubmit:true,

items:[
{
	xtype: 'toolbar',
            docked: 'top',
            title: 'Configuration',
            
     },
		
	{
	xtype:'fieldset',
	title:'Configuration Details',
		items:[
			{
			xtype:'textfield',
			name:'mime',
			label:'MIME Type',
			value:'hello world'
			},
			{
			xtype:'textfield',
			name:'url',
			label:'Url',
			value:'http://115.115.123.202:9090/dwj/service.php'
			},
			{
			xtype:'textfield',
			name:'contentType',
			label:'Content Type'
			},
			
			{
			xtype:'textfield',
			name:'characterType',
			label:'Character Type'
			}
		]
		},
		{
            xtype: 'button',
            text: 'Save',
            action:'saveConfiguration',
            ui:'button'
            }
]
}
});