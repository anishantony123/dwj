Ext.define('radiss.view.NewAttachmentForm',{
extend:'Ext.Panel',
xtype:'newAttachmentForm',
id:'newAttachmentForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','Ext.field.DatePicker','Ext.field.Hidden'],
config:{
		title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
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
            			text:'Click',
            			action:'takeAPicture',
            			name:'mybutton',
            			ui:'button'
            		},/*{
            			xtype:'button',
            			itemId: 'savePicture',
            			text:'Save',
            			action:'savePicture',
            			ui:'button'
            		},*/
            		{
            			xtype:'hiddenfield',
            			name:'imageUrl'	
            		}
            	]
     }
     
]    
},

  
});


