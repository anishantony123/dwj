Ext.define('radiss.view.Main',{
extend:'Ext.TabPanel',
//xtype:'mainCard',
requires:['radiss.view.Settings','radiss.view.Journal','radiss.view.JournalLayout','radiss.view.Equipment','radiss.view.JournalDetails','radiss.view.MainTask','radiss.view.Weather','radiss.view.ActivitiesNTasks','radiss.view.Events','radiss.view.JournalList','radiss.view.SiteDetails','radiss.view.Journalform','radiss.view.Weatherform','radiss.view.ActivitiesNtaskForm','radiss.view.NewEquipment','radiss.view.Eventform','radiss.view.Visitors','radiss.view.NewVisitorForm','radiss.view.EditVisitorForm','radiss.view.Labour','radiss.view.NewLabourForm','radiss.view.Attachment','radiss.view.NewAttachmentForm','radiss.view.ConfigurationForm','Ext.data.JsonP'],
xtype:'mainpanel',
id:'mainpanel',

config:{
//	html:'welcome to rims helpdesk',
	title:'<div style="text-align:center; margin:0 0 -8 0;"><img src="images/bannerLogo.png" valign="top"/> Proliance Mobile</div>',
	fullscreen:true,
	tabBarPosition:'bottom',
	 tabBar: {
	scrollable: {
            direction: 'horizontal'
       }},
	items:[
		
		
		{
		xtype:'maintask'
		},
		{
		xtype:'listJournal'		
		},
		{
		xtype:'weather'
		},
		{
		xtype:'equipment'
		},
		{
		xtype:'activitesntasks'
		},
		{
		xtype:'events'
		},
		{
		xtype:'visitors'
		},
		{
		xtype:'labour'
		}
		,
				{
				xtype:'attachment'
				}
				
		
		]	
	}	
	});