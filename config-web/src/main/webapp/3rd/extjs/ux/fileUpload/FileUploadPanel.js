/*!
* @author caizhiping 
* @since 2011-11-08
* 非flash多文件上传 V0.9
* QQ:231865505
*/
FileUploadPanel = function(cfg){
	Ext.apply(this, cfg);
	FileUploadPanel.superclass.constructor.call(this,{
		fileUpload : true,
		autoScroll : true,
		labelAlign : 'right',
		bodyStyle: 'padding: 10px 10px 0 10px;',
        defaults: {anchor: '98%'},
        items : [
			{
				_itemId : 'uf_1',
                xtype: 'compositefield',
                fieldLabel: '文件',
                msgTarget : 'side',
                anchor    : '-20',
                defaults: {
                    flex: 1
                },
                items: [
                    {
						xtype: 'fileuploadfield',
			            emptyText: '请选择文件...',			            
			            name: 'file',
			            buttonText: '',
			            allowBlank: false,
			            buttonCfg: {
			                iconCls: 'upload-icon'
			            }
					},
                    {
                        xtype: 'button',
                        width : 25,
                        iconCls : 'delete',
                        scope : this,
                        _ownerCtId : 'uf_1',
                        handler : this.removeField
                    }
                ]
            }
		],
		tbar : [
			{text:'添加',iconCls:'add',handler:this.addField,scope:this},'-',
			{text:'上传',iconCls:'up',handler:this.toSubmit,scope:this},'-'
		]
	});
}
Ext.extend(FileUploadPanel, Ext.form.FormPanel,{
	toSubmit : function(){//文件上传
	},
	addField : function(){//添加文件上传选择框
		var n = this.maxItems || 8 ;
		var k = this.getNextItemNum();
		if(this.items.length>=n){
			Ext.Msg.show({
				title : '提示',
				msg : '最大上传文件数量为'+n,
				icon : Ext.Msg.INFO,
				width : 230,
				buttons : Ext.Msg.OK
			});
			return;
		}else{
			this.add({
				_itemId : 'uf_'+k,
                xtype: 'compositefield',
                fieldLabel: '文件',
                msgTarget : 'side',
                anchor    : '-20',
                defaults: {
                    flex: 1
                },
                items: [
                    {
						xtype: 'fileuploadfield',
			            emptyText: '请选择文件...',			            
			            name: 'file',
			            buttonText: '',
			            allowBlank: false,
			            buttonCfg: {
			                iconCls: 'upload-icon'
			            }
					},
                    {
                        xtype: 'button',
                        width : 25,
                        iconCls : 'delete',
                        scope : this,
                        _ownerCtId : 'uf_'+k,
                        handler : this.removeField
                    }
                ]
            });
			this.doLayout();
		}		
	},
	getNextItemNum : function(){//获取准备添加的文件选择框索引
		var n = this.items.length || 0;
		return Number(n)+1
	},
	removeField : function(btn){//移除文件选择框
		var itemId = btn._ownerCtId;
		var items = this.items;
		for(var i=0;i<items.length;i++){
			if(items.itemAt(i)._itemId == itemId){
				this.remove(items.itemAt(i),true);
				this.doLayout();
				return;
			}
		}
	}
});