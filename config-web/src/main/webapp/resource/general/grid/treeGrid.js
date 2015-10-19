Ext.ns("ext.sgx.general")

ext.sgx.general.treeGrid = function (cfg) {
    Ext.apply(this,cfg);

    ext.sgx.general.treeGrid.superclass.constructor.call(this, {
        title:'树形表格',
        width: 500,
        height: 300,
        enableDD: true,
        autoShow:true,
        columns:[{
            header: 'Task',
            dataIndex: 'task',
            width: 230
        },{
            header: 'Duration',
            width: 100,
            dataIndex: 'duration',
            align: 'center',
            sortType: 'asFloat',
            tpl: new Ext.XTemplate('{duration:this.formatHours}', {
                formatHours: function(v) {
                    if(v < 1) {
                        return Math.round(v * 60) + ' mins';
                    } else if (Math.floor(v) !== v) {
                        var min = v - Math.floor(v);
                        return Math.floor(v) + 'h ' + Math.round(min * 60) + 'm';
                    } else {
                        return v + ' hour' + (v === 1 ? '' : 's');
                    }
                }
            })
        },{
            header: 'Assigned To',
            width: 150,
            dataIndex: 'user'
        }],

        dataUrl: 'data/treegrid-data.json'
    });
};
Ext.extend(ext.sgx.general.treeGrid,Ext.ux.tree.TreeGrid, {});