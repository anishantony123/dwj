Ext.define('radiss.view.LoginLayout',{
//extend:'Ext.TabPanel',
extend: 'Ext.form.Panel',
requires:['radiss.view.Main','Ext.field.Password'],
xtype:'loginlayout',
id:'loginlayout',
config:{
	title:'DWJ Demo',
	fullscreen:true,
	 title: 'Login',
	 /*
	 layout:{
		 pack:'center',
		 type:'vbox',
		 align:'center'
				 },*/
	 
     items: [
                 
                    {
                        xtype: 'fieldset',
                        title: 'DWJ Demo Login',
                        items: [
                            {
                                xtype: 'textfield',
                                placeHolder: 'Username',
                                itemId: 'userNameTextField',
                                name: 'userNameTextField',
                                required: true
                            },
                            {
                                xtype: 'passwordfield',
                                placeHolder: 'Password',
                                itemId: 'passwordTextField',
                                name: 'passwordTextField',
                                required: true
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        itemId: 'logInButton',
                        ui: 'action',
                        padding: '10px',
                        text: 'Log In',
                        action:'loginToMain'
                    }
         ]
	
	}	
	});


/*Ext.define('radiss.view.MainLayout', {
    extend: 'Ext.form.Panel',
    xtype:'mainlayout',
    config: {
        title: 'Login',
        html: 'Login View'
    }
});*/