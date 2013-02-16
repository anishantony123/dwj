Ext.define('radiss.view.Visitors',{
extend:'Ext.List',
xtype:'visitors',
requires:['Ext.form.FieldSet','Ext.field.Text'],
config:{			
//	requires:['radiss.model.JournalList'],
//	xtype:'journallist',
//	config:{
		onItemDisclosure: true,
		title:'Visitors',
		iconCls:'favorites',
		store:{
		 fields: ['id', 'company','compName','purposeOfVisit','toSee','arrivalTime','depatureTime'],
	        data: [
	            /*
				{id: 1,  company: 'Lakewood',compName: 'John', purposeOfVisit:'Industrial visit', toSee:'To see Discription', arrivalTime:'10:00 AM',depatureTime:'12:00 PM'},
								{id: 2,  company: 'AEM',compName: 'Steve', purposeOfVisit:'Industrial visit', toSee:'To see Discription',arrivalTime:'11:00 AM',depatureTime:'5:00 PM'}
								*/
				
	        ]
		},
	itemTpl:'<span>{company}&nbsp;(Company Name:{compName})<br/><font size="2"><b>Purpose Of Visit: {purposeOfVisit}<br/>To See: {toSee} | Arrival Time: {arrivalTime} | Depature Time: {depatureTime}</b></font></span>',
items: [{
		xtype: 'toolbar',
                docked: 'top',
                title: 'Visitors',
                items: [/*{	                
	                    text: 'Delete',
		                action:'activitiesDel'
	                },*/{
	                    text: 'Add New',
	                    action:'newVisitor'
	                }]
	}]
	},
});