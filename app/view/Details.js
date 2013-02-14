Ext.define('Rims.view.Details',{
extend:'Ext.form.FormPanel',
xtype:'details',
requires:['Ext.form.FieldSet'],
config:{
title:'Details',
iconCls:'settings',
//standardSubmit:true,
items:[
{
                docked: 'top',
                xtype: 'toolbar',
                title: 'Details'
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