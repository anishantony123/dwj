Ext.define('radiss.view.Weather',{
extend:'Ext.List',
xtype:'weather',
requires:['Ext.form.FieldSet','Ext.field.Text'],
config:{			
//	requires:['radiss.model.JournalList'],
//	xtype:'journallist',
//	config:{
	onItemDisclosure: true,
		title:'Weather',
		iconCls:'favorites',
		store:{
		 fields: ['id', 'fromTime','toTime','notes','precipitation','rainfall', 'snowfall'],
	        data: [
	            	 {id: 1,  fromTime: '11:00 AM',toTime: '12:00 AM', notes:'Sample note 1 rendering here', precipitation:'Drizzle:Drizzle', rainfall:'0.12', snowfall:'0.11'},
	            	 {id: 2,  fromTime: '11:00 AM',toTime: '12:00 AM', notes:'Sample note 2 rendering here', precipitation:'Drizzle:Drizzle', rainfall:'0.16', snowfall:'0.11'} 
	        ]
		},
	itemTpl:'<span>{fromTime}-{toTime}<br/><font size="2"><b>{notes}</b></font><br/><font size="2"><b>Precipitation: {precipitation} | Rainfall: {rainfall} | Snowfall: {snowfall} </b></font></span>',
	items: [{
			xtype: 'toolbar',
	                docked: 'top',
	                title: 'Weather',
	                items: [/*{
	                    text: 'Delete',
	                    action:'deleteWeather'
	                }
	                ,*/{
	                    text: 'Add New',
	                    action:'addWeather'
	                }
	                ]
		}]
		},
	
	});