Ext.define('radiss.view.Labour',{
extend:'Ext.List',
xtype:'labour',
requires:['Ext.form.FieldSet','Ext.field.Text','radiss.view.EditLabourForm'],
config:{			
//	requires:['radiss.model.JournalList'],
//	xtype:'journallist',
//	config:{
		onItemDisclosure: true,
		title:'Labor',
		iconCls:'favorites',
		store:{
		 fields: ['id', 'company','contract','count','uom','notes','trade','workArea','workCategory'],
	        data: [
	           /*
				{id: 1,  company: 'Toyota',contract: 'Concrete Footing east side', count:'3', uom:'Measure 1', notes:'Sample Note 1',trade:'ISO',workArea:'USA',workCategory:'Category1'},
							   {id: 2,  company: 'Lakewood',contract: 'Electrical trenches main service', count:'3', uom:'Measure 2',notes:'Sample Note 2',trade:'ISO',workArea:'USA',workCategory:'Category2'}
							   */
			   
	        ]
		},
	itemTpl:'<span>{company}&nbsp;(Contract:{contract})<br/><font size="2"><b>count: {count} | UOM: {uom}<br/>Trade: {trade} | Work Area: {workArea} | Work Category: {workCategory}<br/>Notes: {notes}</b></font></span>',
items: [{
		xtype: 'toolbar',
                docked: 'top',
                title: 'Labor',
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