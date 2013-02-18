var equipment =Ext.define('radiss.view.Equipment',{
	extend:'Ext.List',
	xtype:'equipment',
	requires:['Ext.form.FieldSet','Ext.field.TextArea','Ext.MessageBox','radiss.view.EditEquipment','Ext.data.Store'],
	fullscreen:true,
	
	config:{			
	title:'Equipment',
	iconCls:'favorites',
	onItemDisclosure: true,
	glossOnIcon: false,
		store:{
		 fields: ['id', 'Equipment','OperatingCompany', 'EquiStatus','RegRate','OverRate','qty','areazone'],
	        data: [
	            /*
				{id: 1,  Equipment: 'EXCAV:Excavator',  OperatingCompany: 'RER Contractors, Inc',  EquiStatus: 'Active-Regular',  RegRate: '200.00',  OverRate: '500.00',qty:'1', areazone: 'USA'},
								{id: 2,  Equipment: 'EXCAV2:Excavator',  OperatingCompany: 'RER2 Contractors, Inc',  EquiStatus: 'InActive',  RegRate: '395.00',  OverRate: '500.00',qty:'1',  areazone: 'USA'}
							 */
				   
	        ]
		},
	itemTpl:'<span>{Equipment} ({OperatingCompany})<br/><font size="2"><b>Equipment Status: {EquiStatus}</b></font><br/><font size="2"><b> Regular Rate: {RegRate} | Overtime Rate: {OverRate} | Quantity: {qty} | Area/Zone: {areazone}</b></font></span>',
	items:[
    	{
                docked: 'top',
                xtype: 'toolbar',
               title: 'Equipment',
                items: [/*{
                    text: 'Delete',
	                action:'equipmentsDelete'
                },*/{
                    text: 'Add New',
                    action:'addequipment'
                }]
            }
    	],
		
		/*listeners:{
            itemtap: function(record, index){ 
			
			Ext.create('Ext.Panel', {	
                    	 requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker'],
					     left: 0,
					     padding: 10,
					     width:500,					     modal:true,
					     hideOnMaskTap: true,
					     items:[
					    	 {
					    		 xtype:'textfield',
					    		 label:'Equipment',
					    		 name:'equipment',
					    		 id:'equipment',
					    		 value:record.getStore().getData().items[index].getData().Equipment
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Operating Company',
					    		 name:'operatingCompany',
					    		 id:'operatingCompanyField',
					    		 value:record.getStore().getData().items[index].getData().OperatingCompany
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Equipment Status',
					    		 name:'EquiStatus',
					    		 id:'EquiStatusField',
					    		 value:record.getStore().getData().items[index].getData().EquiStatus
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Regular Rate',
					    		 name:'Regular Rate',
					    		 id:'regRateField',
					    		 value:record.getStore().getData().items[index].getData().RegRate
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Overtime Rate',
					    		 name:'overRate',
					    		 id:'ovrRateField',
					    		 value:record.getStore().getData().items[index].getData().OverRate
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Quantity',
					    		 name:'qty',
					    		 id:'qtyField',
					    		 value:record.getStore().getData().items[index].getData().qty
					    	 },
					    	  {
					    		 xtype:'button',
					    		 text:'Update',
					    		 handler:function(){
					    		 console.log(record.getStore().getData().items[index].getData().journal);
					    		 equipment=this.getParent().child('#equipment').getValue();
					    		 record.getStore().getData().items[index].set('Equipment',equipment);
					    		 
					    		 operatingCompanyField=this.getParent().child('#operatingCompanyField').getValue();
					    		 record.getStore().getData().items[index].set('OperatingCompany',operatingCompanyField);
					    		 
					    		 EquiStatusField=this.getParent().child('#EquiStatusField').getValue();
					    		 record.getStore().getData().items[index].set('EquiStatus',EquiStatusField);
					    		 
					    		 regRateField=this.getParent().child('#regRateField').getValue();
					    		 record.getStore().getData().items[index].set('RegRate',regRateField);
					    		 
					    		 ovrRateField=this.getParent().child('#ovrRateField').getValue();
					    		 record.getStore().getData().items[index].set('OverRate',ovrRateField);
					    		 
					    		 qtyField=this.getParent().child('#qtyField').getValue();
					    		 record.getStore().getData().items[index].set('qty',qtyField);
					    		 }
					    		
					    	  },
					    	  {
					    		 xtype:'button',
					    		 text:'Delete',
					    		 handler:function(){
					    		 Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			record.getStore().removeAt(index);
						    		 	this.getParent().hide();
						    		 	}
					    		 },this);
					    		 }
					    		
					    	  }
					    	 ]
					 }).showBy(record);
            }
		}*/
	}
});
 