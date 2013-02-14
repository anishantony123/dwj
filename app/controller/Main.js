Ext.define('radiss.controller.Main', {
    extend: 'Ext.app.Controller',
    config:{
		//stores:['JournalList'],

    	refs:{
			journalform:'journalform',
			updatejournal:'button[action=updatejournal]',
			updateequipment:'button[action=updateequipment]',
			enquiryButton:'button[action=save]',
			updateWeather:'button[action=updateweather]',
			updateVisitor:'button[action=updateVisitor]',
			updateLabour:'button[action=updateLabour]',
			updateAttachment:'button[action=updateAttachment]',
			main:'mainlayout',
			journallist:'listJournal',	
			equipment:'equipment',
			journal:'journal',
			datalist:'datalist',
			visitors:'visitors',
			labour:'labour',
			attachment:'attachment',
			addjournal:'button[action=addjournal]',
			listjournal:'button[action=listjournal]',
			equipment:'equipment',
			saveDetails:'button[action=saveDetails]',
			showJournal:'button[action=showJournal]',
			weatherDelete:'button[action=deleteWeather]',
			addWeather:'button[action=addWeather]',
			weather:'weather',
			closeevent:'button[action=closeevent]',
			newevent:'newevent',
			activitesDel:'button[action=activitiesDel]',
			activitiesntasks:'activitesntasks',
			activitiesNew:'button[action=newActivities]',
			visitorsNew:'button[action=newVisitor]',
			labourNew:'button[action=newLabour]',
			attachmentNew:'button[action=newAttachment]',
			addNewEvent:'button[action=addnewevent]',
			events:'events',
			newEvent:'button[action=newevent]',
			addNewActivity:'button[action=addnewactivity]',
			eventsDelete:'button[action=eventsDelete]',
			equipmentsDelete:'button[action=equipmentsDelete]',
			loadSiteDetails:'button[action=LoadSiteDetails]',
			addNewWeather:'button[action=addnewweather]',
			addEquipment:'button[action=addequipment]',
			saveEquipment:'button[action=saveequipment]',
			saveJournal:'button[action=savejournal]',
			deleteJournal:'button[action=deletejournal]',
			deleteVisitor:'button[action=deletevisitor]',
			deleteLabour:'button[action=deletelabour]',
			deleteAttachment:'button[action=deleteattachment]',
			journalPanel:'journalpanel',
			detailSetting:'button[action=detailSettings]',
			loginToMain:'button[action=loginToMain]',
			detailSetting:'button[action=detailSettings]',
			saveWeather:'button[action=saveweather]',
			saveActivities:'button[action=saveactivities]',
			saveVisitor:'button[action=saveVisitor]',
			saveLabour:'button[action=saveLabour]',
			saveAttachment:'button[action=saveAttachment]',
			activitiesntaskform:'activitiesntaskform',
			updateActivities:'button[action=updateactivities]',
			saveEvent:'button[action=saveevent]',
			updateEvent:'button[action=updateevent]',
			takeAPicture:'button[action=takeAPicture]',
			savePicture:'button[action=savePicture]'


         },
		control: {
			addjournal:{
					tap:'addJournal'
					
				},
			listjournal:{
					tap:'listJournal'
				},
			journallist:{
					disclose:'journalDetails',
					//itemTap:'editJournal'
				},
			equipment:{
					disclose:'equipmentDetails',
					//itemTap:'editJournal'
				},
			visitors:{
					disclose:'visitorsDetails',
					//itemTap:'editJournal'
				},
			labour:{
					disclose:'labourDetails',
					//itemTap:'editJournal'
				},
			attachment:{
					disclose:'attachmentDetails',
					//itemTap:'editJournal'
				},
			saveDetails:{
					tap:'saveMainDetails'
			},
			showJournal:{
					tap:'showJournal'
			},
			weatherDelete:{
				tap:'deleteWeather'
			},
			closeevent:{
				tap:'closeEvent'
					},
			activitesDel:{
				tap:'deleteActivities'
			},
			activitiesNew:{
				tap:'newActivities'
			},
			visitorsNew:{
				tap:'newVisitors'
			}
			,
			labourNew:{
				tap:'newLabour'
			},
			attachmentNew:{
				tap:'newAttachment'
			}
			,
			addNewEvent:{
				tap:'addNewEvent'
			},
			newEvent:{
				tap:'loadNewEventForm'
			},
			addNewActivity:{
				tap:'addNewActivity'
			},
			eventsDelete:{
				tap:'deleteEvents'
			},
			equipmentsDelete:{
				tap:'deleteEquipment'
			},

			loadSiteDetails:{
				tap:'loadSiteDetailsTab'
					},

			addWeather:{
				tap:'addWeather'
			},
			addNewWeather:{
				tap:'addNewWeather'
			},
			addEquipment:{
				tap:'addEquipment'
			},
			saveEquipment:{
				tap:'saveEquipment'
			},
			saveJournal:{
				tap:'saveJournal'
			},
			deleteJournal:{
				tap:'deleteJournal'
			},
			deleteVisitor:{
				tap:'deleteVisitor'
			},
			deleteLabour:{
				tap:'deleteLabour'
			},
			deleteAttachment:{
				tap:'deleteAttachment'
			},
			detailSetting:{
				tap:'SettingDetail'
			},

			loginToMain:{
				tap:'mainLogin'},

			updatejournal:{
				tap:'updateJournal'
			},
			updateequipment:{
				tap:'updateEquipment'
			},
			saveWeather:{
				tap:'saveWeather'
			},
			weather:{
				disclose:'weatherDetails'
			},
			updateWeather:{
				tap:'updateWeather'
			},
			saveActivities:{
				tap:'saveActivities'
			},
			saveVisitor:{
				tap:'saveVisitors'
			},
			saveLabour:{
				tap:'saveLabour'
			},
			saveAttachment:{
				tap:'saveAttachment'
			},
			activitiesntasks:{
				disclose:'activitiesNtasksDetails'
			},
			updateActivities:{
				tap:'updateActivities'
			},
			saveEvent:{
				tap:'saveEvent'
			},
			events:{
				disclose:'eventDetails'
			},
			updateEvent:{
				tap:'updateEvent'
			},
			updateVisitor:{
				tap:'updateVisitor'
			},
			updateLabour:{
				tap:'updateLabour'
			},
			updateAttachment:{
				tap:'updateAttachment'
			},
			takeAPicture:{
				tap:'takePicture'
			},
			savePicture:{
				tap:'savePicture'
			}
    	}	
    	},
    	
		addJournal:function(btn,evt){
				/*Ext.create('Ext.Panel', {	
						 xtype:'journalpanel',
                    	 requires:['Ext.form.FieldSet','Ext.field.Text'],
					     left: 0,
					     padding: 10,
					     width:500,					     modal:true,
					     hideOnMaskTap: true,
					     items:[
					    	 {
					    		 xtype:'textareafield',
					    		 label:'Journal',
					    		 name:'journal',
					    		 id:'journalText'
					    	 },
					    	  {
					    		 xtype:'button',
					    		 text:'Add Journal',
					    		 action:'savejournal'					    		 handler:function(){
					    		 var journalText=this.getParent().child('#journalText').getValue();
					    		 var listJournalObj=btn.getParent().getParent();
					    		 listJournalObj.getStore().add(
				    				{journal: journalText}	
				    				);
					    		 }
					    	  }
					    	 ]
					 }).showBy(btn);*/
    		
    			this.getMain().push({
    				xtype:'journal'
    			});
		},
		listJournal:function(){
			console.log('list jorunal');
			this.getMain().push({
            	xtype: 'listJournal'            	
        		});
		},
		journalDetails:function(list,record){
				var journalObj=Ext.create('radiss.view.EditJournal');
				console.log(record);
				journalObj.setRecord(record);
				this.getMain().push(
	            	journalObj      	
	        		);
		}
		,
		equipmentDetails:function(list,record){
				var equipmentObj=Ext.create('radiss.view.EditEquipment');
				console.log(record);
				equipmentObj.setRecord(record);
				this.getMain().push(
	            	equipmentObj      	
	        		);
		},
		visitorsDetails:function(list,record){
				var equipmentObj=Ext.create('radiss.view.EditVisitorForm');
				console.log(record);
				equipmentObj.setRecord(record);
				this.getMain().push(
	            	equipmentObj      	
	        		);
		},
		labourDetails:function(list,record){
				var equipmentObj=Ext.create('radiss.view.EditLabourForm');
				console.log(record);
				equipmentObj.setRecord(record);
				this.getMain().push(
	            	equipmentObj      	
	        		);
		},
		attachmentDetails:function(list,record){
				var equipmentObj=Ext.create('radiss.view.EditAttachmentForm');
				console.log(record);
				equipmentObj.setRecord(record);
				this.getMain().push(
	            	equipmentObj      	
	        		);
		},
		saveMainDetails:function(list,record){
			Ext.Msg.alert('Success', 'Your data is processed', Ext.emptyFn);
		},
		showJournal:function(){
			this.getMain().push({
            	xtype: 'journallayout'            	
        		});
		},
		deleteWeather:function(btn){
			var index=this.getWeather().getStore().indexOfId(btn.up('editweatherform').getValues().id);
			
			Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			this.getWeather().getStore().removeAt(index);
						    			this.getMain().pop();
						    		 	}
					    		 },this);
		},
		deleteActivities:function(list,record){
		//	var selArray=this.getActivitiesntasks().getSelectionModel().getSelected();
			

			this.getActivitiesntasks().getStore().removeAt(0);
		},

		newActivities:function(btn,evt){
			this.getMain().push({xtype:'activitiesntaskform'});
		},
		newVisitors:function(btn,evt){
			this.getMain().push({xtype:'newVisitorForm'});
		},
		newLabour:function(btn,evt){
			this.getMain().push({xtype:'newLabourForm'});
		},
		newAttachment:function(btn,evt){
			this.getMain().push({xtype:'newAttachmentForm'});
		},
		addNewActivity:function(btn,evt){
			/*console.log("add new activity");
			this.getActivitiesntasks().getStore().add(
			{ workedOn: 'Not Worked On',taskTitle: 'Electrical trenches main service', taskId:'1', description:'More description about second one', percent:'25'}
			);*/
			
			
		},
		addNewEvent:function(btn,evt){
			console.log("add new events");
			this.getEvents().getStore().add(
			{  EventTime: '10:00 AM',EventNotes: 'Structural inspector visit and approval of 2nd floor welds and footing reinforcements'}	
			);				
		},
		loadNewEventForm:function(btn,evnt){
					this.getMain().push({
						xtype:'eventform'
					})

		},
		
		deleteEvents:function(btn){
			var index=this.getEvents().getStore().indexOfId(btn.up('formpanel').getValues().id);
			
			Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			this.getEvents().getStore().removeAt(index);
						    			this.getMain().pop();
						    		 	}
					    		 },this);
		},
		deleteEquipment:function(btn){
		//	console.log("--------------");
			var index=this.getEquipment().getStore().indexOfId(btn.up('editequipment').getValues().id);
			
			Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			this.getEquipment().getStore().removeAt(index);
						    			this.getMain().pop();
						    		 	}
					    		 },this);
},

		loadSiteDetailsTab:function(list,record){
			
			console.log('loading Site Details');
			this.getMain().pop();
			this.getMain().push({
            	xtype: 'sitedetails'            	
        		});
			},

		addWeather:function(btn,evt){

			Ext.create('Ext.Panel', {	
                    	 requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker'],
					     left: 0,
					     padding: 10,
					     modal:true,
					     hideOnMaskTap: true,
					     items:[
					    	 {
					    		 xtype:'textfield',
					    		 label:'From Time',
					    		 name:'fromTime',
					    		 id:'fromDateField'
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'To Time',
					    		 name:'toTime',
					    		 id:'toDateField'
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Note',
					    		 name:'note',
					    		 id:'notefield'
					    	  },
					    	   {
					    		 xtype:'textfield',
					    		 label:'Percipitation',
					    		 name:'perception',
					    		 id:'perceptionField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Rainfall',
					    		 name:'rainFall',
					    		 id:'rainfallField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Snowfall',
					    		 name:'snowFall',
					    		 id:'snowfallField'
					    	  },
					    	  {
					    		 xtype:'button',
					    		 text:'Add Weather',
					    		handler:function(){var fromDateField=this.getParent().child('#fromDateField').getValue();
			var toDateField=this.getParent().child('#toDateField').getValue();
			var notefield=this.getParent().child('#notefield').getValue();
			var perceptionField=this.getParent().child('#perceptionField').getValue();
			var rainfallField=this.getParent().child('#rainfallField').getValue();
			var snowfallField=this.getParent().child('#snowfallField').getValue();
			var listJournalObj=btn.getParent().getParent();
			listJournalObj.getStore().add({fromTime: fromDateField,toTime:toDateField,notes:notefield,precipitation:perceptionField,rainfall:rainfallField,snowfall:snowfallField}	
				    				);
					    		 }
					    		 
					    	  }
					    	 ]
					 }).showBy(btn);


		},
		
		addEquipment:function(btn,evt){
					/*Ext.create('Ext.Panel', {	
                    	 requires:['Ext.form.FieldSet','Ext.field.Text','Ext.field.DatePicker'],
					     left: 0,
					     padding: 10,
					     modal:true,
					     hideOnMaskTap: true,
					     items:[
					    	 {
					    		 xtype:'textfield',
					    		 label:'Equipment',
					    		 name:'equipment',
					    		 id:'equipmentField'
					    	 },
					    	 {
					    		 xtype:'textfield',
					    		 label:'Operating Company',
					    		 name:'operatingCompany',
					    		 id:'operatingCompanyField'
					    	 },
					    	   {
					    		 xtype:'textfield',
					    		 label:'Equipment Status',
					    		 name:'EquiStatus',
					    		 id:'EquiStatusField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Regular Rate',
					    		 name:'regRate',
					    		 id:'regRateField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Overtime Rate',
					    		 name:'overRate',
					    		 id:'ovrRateField'
					    	  },
					    	  {
					    		 xtype:'textfield',
					    		 label:'Quantity',
					    		 name:'qty',
					    		 id:'qtyField'
					    	  },
					    	  {
					    		 xtype:'button',
					    		 text:'Add Equipment',
					    		 handler:function(){
			var equipmentField=this.getParent().child('#equipmentField').getValue();
			var operatingCompanyField=this.getParent().child('#operatingCompanyField').getValue();
			var EquiStatusField=this.getParent().child('#EquiStatusField').getValue();
			var regRateField=this.getParent().child('#regRateField').getValue();
			var qtyField=this.getParent().child('#qtyField').getValue();
			var listJournalObj=btn.getParent().getParent();
			listJournalObj.getStore().add({Equipment:equipmentField,OperatingCompany:operatingCompanyField,EquiStatus:EquiStatusField,RegRate:regRateField,qty:qtyField,OverRate:regRateField}	
				    				);
					    		 }
					    	  }
					    	 ]
					 }).showBy(btn);*/
			this.getMain().push({
    				xtype:'newEquipment'
    			});
		},
		saveEquipment:function(btn,evnt){
    				this.getEquipment().getStore().add(
	    				btn.up('formpanel').getValues()	
    				);
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Added Successfully',function(){
    					obj.getMain().pop();
    				});
		},

		saveJournal:function(btn,evnt){
    				this.getJournallist().getStore().add(
	    				btn.up('formpanel').getValues()	
    				);
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Added Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		deleteJournal:function(btn){
		//	console.log("--------------");
			var index=this.getJournallist().getStore().indexOfId(btn.up('editjournal').getValues().id);
			
			Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			this.getJournallist().getStore().removeAt(index);
						    			this.getMain().pop();
						    		 	}
					    		 },this);
			},
			deleteVisitor:function(btn){
		//	console.log("--------------");
			var index=this.getVisitors().getStore().indexOfId(btn.up('editVisitorForm').getValues().id);
			
			Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			this.getVisitors().getStore().removeAt(index);
						    			this.getMain().pop();
						    		 	}
					    		 },this);
			},
			deleteLabour:function(btn){
		//	console.log("--------------");
			var index=this.getLabour().getStore().indexOfId(btn.up('editLabourForm').getValues().id);
			
			Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			this.getLabour().getStore().removeAt(index);
						    			this.getMain().pop();
						    		 	}
					    		 },this);
			},
			deleteAttachment:function(btn){
		console.log("--------------");
			var index=this.getAttachment().getStore().indexOfId(btn.up('editAttachmentForm').getValues().id);
			
			Ext.Msg.confirm('Delete','Do you want to Delete',function(btn){
					    			 if(btn=='yes'){
						    			this.getAttachment().getStore().removeAt(index);
						    			this.getMain().pop();
						    		 	}
					    		 },this);
			},
		SettingDetail:function(){
				this.getMain().pop();
			this.getMain().push({
            	xtype: 'maintask'            	
        		});
		},
		mainLogin:function(){
			 Ext.getCmp('loginlayout').destroy();
			/*this.getMain().add({
            	xtype: 'maintask'            	
        		});*/
			
		}

		,
		updateJournal:function(btn){
			var index=this.getJournallist().getStore().indexOfId(btn.up('editjournal').getValues().id);
			console.log(index);
			this.getJournallist().getStore().removeAt(index);
			this.getJournallist().getStore().insert(index,
	    				btn.up('editjournal').getValues()	
    				);
				console.log(btn.up('editjournal').getValues());
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Updated Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		updateEquipment:function(btn){
			var index=this.getEquipment().getStore().indexOfId(btn.up('editequipment').getValues().id);
			console.log(index);
			this.getEquipment().getStore().removeAt(index);
			this.getEquipment().getStore().insert(index,
	    				btn.up('editequipment').getValues()	
    				);
				console.log(btn.up('editequipment').getValues());
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Updated Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		saveWeather:function(btn){
				this.getWeather().getStore().add(
	    				btn.up('weatherform').getValues()	
    				);
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Added Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		weatherDetails:function(list,record){
			var weatherObj=Ext.create('radiss.view.EditWeatherform');
			console.log(record);
			weatherObj.setRecord(record);
			this.getMain().push(
	            	weatherObj      	
	        		);
		},
		updateWeather:function(btn){
			var index=this.getWeather().getStore().indexOfId(btn.up('editweatherform').getValues().id);
			console.log(index);
			this.getWeather().getStore().removeAt(index);
			this.getWeather().getStore().insert(index,
	    				btn.up('editweatherform').getValues()	
    				);
				console.log(btn.up('editweatherform').getValues());
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Updated Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		saveActivities:function(btn){
			this.getActivitiesntasks().getStore().add(
	    				btn.up('formpanel').getValues()	
    				);
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Added Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		saveVisitors:function(btn){
			this.getVisitors().getStore().add(
	    				btn.up('formpanel').getValues()	
    				);
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Added Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		saveLabour:function(btn){
			this.getLabour().getStore().add(
	    				btn.up('formpanel').getValues()	
    				);
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Added Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		saveAttachment:function(btn){
			this.getAttachment().getStore().add(
	    				btn.up('formpanel').getValues()	
    				);
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Added Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		activitiesNtasksDetails:function(list,record){
			var activitiesNtasksObj=Ext.create('radiss.view.EditActivitiesNtaskForm');
				console.log(record);
				activitiesNtasksObj.setRecord(record);
				this.getMain().push(
	            	activitiesNtasksObj      	
	        		);
		},
		updateActivities:function(btn){
			var index=this.getActivitiesntasks().getStore().indexOfId(btn.up('formpanel').getValues().id);
			console.log(index);
			this.getActivitiesntasks().getStore().removeAt(index);
			this.getActivitiesntasks().getStore().insert(index,
	    				btn.up('formpanel').getValues()	
    				);
				console.log(btn.up('formpanel').getValues());
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Updated Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		saveEvent:function(btn){
			this.getEvents().getStore().add(
	    				btn.up('formpanel').getValues()	
    				);
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Added Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		eventDetails:function(list,record){
			var eventsObj=Ext.create('radiss.view.EditEventform');
				console.log(record);
				eventsObj.setRecord(record);
				this.getMain().push(
	            	eventsObj      	
	        		);
		},
		updateEvent:function(btn){
			var index=this.getEvents().getStore().indexOfId(btn.up('formpanel').getValues().id);
			console.log(index);
			this.getEvents().getStore().removeAt(index);
			this.getEvents().getStore().insert(index,
	    				btn.up('formpanel').getValues()	
    				);
				console.log(btn.up('formpanel').getValues());
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Updated Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		updateVisitor:function(btn){
			var index=this.getVisitors().getStore().indexOfId(btn.up('formpanel').getValues().id);
			console.log(index);
			this.getVisitors().getStore().removeAt(index);
			this.getVisitors().getStore().insert(index,
	    				btn.up('formpanel').getValues()	
    				);
				console.log(btn.up('formpanel').getValues());
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Updated Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		updateLabour:function(btn){
			var index=this.getLabour().getStore().indexOfId(btn.up('formpanel').getValues().id);
			console.log(index);
			this.getLabour().getStore().removeAt(index);
			this.getLabour().getStore().insert(index,
	    				btn.up('formpanel').getValues()	
    				);
				console.log(btn.up('formpanel').getValues());
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Updated Successfully',function(){
    					obj.getMain().pop();
    				});
    				},
		updateAttachment:function(btn){
			var index=this.getLabour().getStore().indexOfId(btn.up('formpanel').getValues().id);
			console.log(index);
			this.getAttachment().getStore().removeAt(index);
			this.getAttachment().getStore().insert(index,
	    				btn.up('formpanel').getValues()	
    				);
				console.log(btn.up('formpanel').getValues());
    				var obj=this;
    				
    				Ext.Msg.alert('Success','Updated Successfully',function(){
    					obj.getMain().pop();
    				});
		},
		takePicture:function(btn){
		//	console.log("------------->>"+btn.up('panel'));  
		//	console.log('Picture taking....');
			try{
			var destinationType;
			function onDeviceReady() {						
						destinationType=navigator.camera.DestinationType;
					}
					
			document.addEventListener("deviceready",onDeviceReady,false);
			
			onPhotoDataSuccess=function(imageURL){
        	btn.up('panel').setData('{imgUrl:'+imageURL+'}');
        	console.log(attachMentObj.getHtml());
        		attachMentObj.setHtml('Image Path:'+imageURL+' <br/><img src="'+imageURL+'">');
        		console.log(attachMentObj.getHtml());
        		
        	}

			onFail=function(message){
							console.log(message);
							var msg = Ext.Msg.show({
								title:'Fail in Cordova!!!',
								message:message
							})
						}
			
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        	destinationType: destinationType.DATA_URL});
			
        	var attachMentObj=btn.up('panel');//Ext.create('radiss.view.NewAttachmentForm');
        	console.log(attachMentObj.getHtml());
        	btn.setText('Take another picture');
			
					}
        	catch(err)
        	{
        		console.log('Exception Thrown'+err);
        		var msg = Ext.Msg.show({
								title:'JS not found',
								message:err
							})
        	}
			
       },
        savePicture:function(btn){
        console.log("inside save picture");
        	imageUriObj=btn.up('panel').getData();
        	console.log(imageUriObj);
        	if(imageUriObj){
        		uploadPhoto(imageUriObj.imgUrl);
        		}
        	function uploadPhoto(imageURI) {
        	console.log(imageURI);
        	
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";

            var params = {};
            params.value1 = "test";
            params.value2 = "param";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(encodeURI(imageURI), encodeURI("http://115.115.123.202:9090/dwj/upload.php"), win, fail, options);
        }

        function win(r) {
        Ext.msg.alert('Uploaded','uploaded sucessfully',Ext.emptyFn);
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
        }

        function fail(error) {
            alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        }
        	

        }
        

		
    });

