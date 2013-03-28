Ext.define('YemekhaneApp.view.override.PanelSettings', {
    override: 'YemekhaneApp.view.PanelSettings',

    onPanelInitialize: function(component, eOpts) {
        //
        console.log(this);
    },


    onBtnKaydetTap: function(button, e, eOpts) {
        var list = Ext.getCmp("ListYemekhane");
        var settings = Ext.data.StoreManager.lookup("settings");
        if (list.getSelectionCount()==1){
            var internalId = list.getSelection()[0].internalId;
            var yId=settings.findRecord("key","yemekhaneId");
            if (yId==null) {
                settings.add({key:"yemekhaneId",value: internalId});
            } else {
                yId.set("value",internalId);
            }
            var listMenu = Ext.getCmp("ListGunlukMenu");
            var store = listMenu.getStore();
            store.clearData();
            store.filter("yemekhaneId",internalId);
            store.load();

        }
        Ext.Viewport.setActiveItem(0);
    },

    onBtnIptalTap: function(button, e, eOpts) {
        Ext.Viewport.setActiveItem(0);
    }
    
});