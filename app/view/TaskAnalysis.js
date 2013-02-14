Ext.define('Rims.view.TaskAnalysis',{
extend:'Ext.form.FormPanel',
xtype:'taskanalysiscard',
requires:['Ext.form.FieldSet'],
config:{
title:'Analysis & Solution',
iconCls:'settings',
//standardSubmit:true,
items:[
{
                docked: 'top',
                xtype: 'toolbar',
                title: 'Analysis & Solution'
            },
{
xtype:'fieldset',
items:[
{
xtype:'textfield',
name:'name',
label:'Name',
required:true
},
{
xtype:'textfield',
name:'phone',
label:'Phone',
required:true
},
{
xtype:'textfield',
name:'email',
label:'Email',
required:true
},
{
xtype:'textareafield',
name:'comment',
label:'Comment',
required:true
}
]
},
{
                xtype: 'button',
                text: 'Mail us',
                action:'save',
                ui:'confirm'
            }
]
}
});