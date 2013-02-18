Ext.define('radiss.view.JournalLayout',{
extend:'Ext.Panel',
//extend: 'Ext.Container',
requires:['radiss.view.Journal','radiss.view.JournalList'],
xtype:'journallayout',
config:{
	iconCls:'home',
	fullscreen:true,
	layout:'vbox',
	title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
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