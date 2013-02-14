Ext.define('radiss.view.Events',{
extend:'Ext.List',
xtype:'events',
requires:['Ext.form.FieldSet','Ext.field.Text','radiss.view.NewEvent'],
config:{			
//	requires:['radiss.model.JournalList'],
//	xtype:'journallist',
//	config:{
		onItemDisclosure: true,
		title:'Events',
		iconCls:'favorites',
		store:{
		 fields: ['id', 'EventTime','EventNotes'],
	        data: [
	            {id: 1,  EventTime: '9:00 AM',EventNotes: 'Building inspector visit and approval of concrete inspection on Building 1'},
	            {id: 2,  EventTime: '10:00 AM',EventNotes: 'Structural inspector visit and approval of 2nd floor welds and footing reinforcements'}
	            
	        ]
		},
	itemTpl:'<span>{EventTime}<br/><font size="2"><b>{EventNotes}</b></font></span>',
items: [{
		xtype: 'toolbar',
                docked: 'top',
                title:'Events',
                items: [/*{
                    text: 'Delete',
                    action:'eventsDelete'

                },*/{
                    text: 'Add New',
					action:'newevent'	
                }]
	}]
	},
});