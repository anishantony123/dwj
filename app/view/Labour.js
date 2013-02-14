Ext.define('radiss.view.Labour',{
extend:'Ext.List',
xtype:'labour',
requires:['Ext.form.FieldSet','Ext.field.Text'],
config:{			
//	requires:['radiss.model.JournalList'],
//	xtype:'journallist',
//	config:{
		onItemDisclosure: true,
		title:'Labour',
		iconCls:'favorites',
		store:{
		 fields: ['id', 'company','contract','count','uom','notes','trade','workArea','workCategory'],
	        data: [
	            {id: 1,  company: 'Yes',contract: 'Concrete Footing east side', count:'1', uom:'Some description about task one', notes:'22',trade:'22',workArea:'22',workCategory:'22'},
	            {id: 2,  company: 'No',contract: 'Electrical trenches main service', count:'1', uom:'More description about second one',notes:'22',trade:'55',workArea:'22',workCategory:'22'}
	            
	        ]
		},
	itemTpl:'<span>{company}&nbsp;(Contract:{contract})<br/><font size="2"><b>count: {count} | UOM: {uom}<br/>Trade: {trade} | Work Area: {workArea} | Work Category: {workCategory}<br/>Notes: {notes}</b></font></span>',
items: [{
		xtype: 'toolbar',
                docked: 'top',
                title: 'Labour',
                items: [/*{	                
	                    text: 'Delete',
		                action:'activitiesDel'
	                },*/{
	                    text: 'Add New',
	                    action:'newLabour'
	                }]
	}]
	},
});