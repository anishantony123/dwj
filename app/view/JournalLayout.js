Ext.define('radiss.view.JournalLayout',{
extend:'Ext.Panel',
//extend: 'Ext.Container',
requires:['radiss.view.Journal','radiss.view.JournalList'],
xtype:'journallayout',
config:{
	iconCls:'home',
	fullscreen:true,
	layout:'vbox',
	title:'Proliance Mobile',
	items:[ {
		
            xtype:'journal',
            flex:2
        },
        {
            xtype:'listJournal',
             flex:1
        }
		]
	}	
	});