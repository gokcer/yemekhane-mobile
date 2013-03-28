Ext.define('YemekhaneApp.view.override.NavMain', {
    override: 'YemekhaneApp.view.NavMain',
    gosterGunlukMenuler: function () {
        var yemekhaneId = Ext.data.StoreManager.lookup("settings").findRecord("key","yemekhaneId").get("value");
        var listGunlukMenu = Ext.create("widget.ListGunlukMenu", {title: "Günlük Menüler"});
        var store = listGunlukMenu.getStore();
        store.filter("yemekhaneId",yemekhaneId);
        store.load();
        this.push(listGunlukMenu);

    },

    onMainNavInitialize: function(component, eOpts) {
        var settings = Ext.data.StoreManager.lookup("settings");
        var yemekhaneId=settings.findRecord("key","yemekhaneId");
        var nav=this;
        if (yemekhaneId == null) {
            Ext.getCmp("BtnSettings").hide();
            var listYemekhane= this.push({
                xtype:"ListYemekhane",
                title:"Yemekhane Seçim"
            })
            listYemekhane.getStore().load();
            listYemekhane.on("itemtap",function (list, index, target, record, e, eOpts ){
                var yId=settings.findRecord("key","yemekhaneId");
                var internalId = record.internalId;
                if (yId==null) {
                    settings.add({key:"yemekhaneId",value: internalId});
                } else {
                    yId.set("value",internalId);
                }
//                nav.removeAll(true); // todo remove yapılamadı. Her seferinde Back çıkıyor. Şimdilik böyle bırakıldı.
                nav.gosterGunlukMenuler();
            });
            console.log(listYemekhane);
        } else{
            this.gosterGunlukMenuler();
        }
    },

    onBtnSettingsTap: function(button, e, eOpts) {
        var id = "PanelSettings";
        var panel = Ext.getCmp(id);
        if (panel == null) {
            panel = Ext.create("widget."+id);
            Ext.Viewport.add(panel);
        } //id ve user class name aynı
        Ext.getCmp("ListYemekhane").getStore().load();
        Ext.Viewport.setActiveItem(panel);
    }

});