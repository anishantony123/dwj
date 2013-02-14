Ext.define('radiss.view.ActivitiesNTasks',{
extend:'Ext.List',
xtype:'activitesntasks',
requires:['Ext.form.FieldSet','Ext.field.Text'],
config:{			
//	requires:['radiss.model.JournalList'],
//	xtype:'journallist',
//	config:{
		onItemDisclosure: true,
		title:'Activities & Tasks',
		iconCls:'favorites',
		store:{
		 fields: ['id', 'workedOn','taskTitle','taskId','description','percent','startDate','endDate'],
	        data: [
	            {id: 1,  workedOn: 'Yes',taskTitle: 'Concrete Footing east side', taskId:'1', description:'Some description about task one', percent:'22',startDate:new Date(),endDate:new Date()},
	            {id: 2,  workedOn: 'No',taskTitle: 'Electrical trenches main service', taskId:'1', description:'More description about second one',startDate:new Date(),endDate:new Date()}
	            
	        ]
		},
	itemTpl:'<span>{taskTitle}&nbsp;(Task Id:{taskId})<br/><font size="2"><b>{description}<br/>Worked On: {workedOn} | {percent}% Completed<br/>Start Date: {startDate} | End Date: {endDate}</b></font></span>',
items: [{
		xtype: 'toolbar',
                docked: 'top',
                title: 'Activites & Tasks',
                items: [/*{	                
	                    text: 'Delete',
		                action:'activitiesDel'
	                },*/{
	                    text: 'Add New',
	                    action:'newActivities'
	                }]
	}]
	},
});