Ext.define('radiss.view.EditAttachmentForm',{
extend:'Ext.form.FormPanel',
xtype:'editAttachmentForm',
requires:['Ext.form.FieldSet','Ext.field.TextArea','radiss.view.JournalList','Ext.MessageBox'],
config:{
/*title:'Journal',
iconCls:'settings',*/
//standardSubmit:true,
items:[
	{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Attachment',
            items:[
            		{
            			xtype:'button',
            			text:'Delete',
            			action:'deleteattachment',
            			ui:'button'
            		}
            	]
     },
	{
		xtype:'fieldset',
		items:[
			{
			xtype:'fieldset',
			items:[{
			xtype:'hiddenfield',
			name:'id'
			},{
					    		 xtype:'textfield',
					    		 label:'File Name',
					    		 name:'fileName',
					    		 id:'fileNameText'
					    	 },
					    	 	 {
					    		 xtype:'textfield',
					    		 label:'File Path',
					    		 name:'filePath',
					    		 id:'filePathText'
					    	  }
			]},
			{
            xtype: 'button',
            text: 'Update',
            action:'updateAttachment',
            ui:'button'
			}
   
		]
		}
		
]

}
});
