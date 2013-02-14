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
	            {id: 1,  company: 'Yes',compName: 'Concrete Footing east side', purposeOfVisit:'1', toSee:'Some description about task one', arrivalTime:'22',depatureTime:'22'},
	            {id: 2,  company: 'No',compName: 'Electrical trenches main service', purposeOfVisit:'1', toSee:'More description about second one',arrivalTime:'22',depatureTime:'55'}
	            
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