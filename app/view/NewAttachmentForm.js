Ext.define('radiss.view.NewAttachmentForm',{
extend:'Ext.Panel',
xtype:'newAttachmentForm',
id:'newAttachmentForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker','Ext.field.Hidden'],
config:{
		title:'DWJ Demo',
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
html:'No picture Taken',

items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Attachment'  ,
            items:[
            		{
            			xtype:'button',
            			itemId: 'mybutton',
            			text:'Take a picture',
            			action:'takeAPicture',
            			name:'mybutton',
            			ui:'button'
            		},{
            			xtype:'button',
            			itemId: 'savePicture',
            			text:'Upload',
            			action:'savePicture',
            			ui:'button'
            		},
            		{
            			xtype:'hiddenfield',
            			name:'imageUrl'	
            		}
            	]
     }
     
]    
},

  
});


