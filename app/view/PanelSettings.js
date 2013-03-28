/*
 * File: app/view/PanelSettings.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('YemekhaneApp.view.PanelSettings', {
    extend: 'Ext.Panel',
    alias: 'widget.PanelSettings',

    requires: [
        'YemekhaneApp.view.ListYemekhane',
        'YemekhaneApp.view.override.PanelSettings'
    ],

    config: {
        id: 'PanelSettings',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        id: 'BtnIptal',
                        itemId: 'BtnIptal',
                        text: 'İptal'
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        id: 'BtnKaydet',
                        itemId: 'BtnKaydet',
                        text: 'Kaydet'
                    }
                ]
            },
            {
                xtype: 'ListYemekhane',
                itemId: 'listyemekhane'
            }
        ],
        listeners: [
            {
                fn: 'onBtnIptalTap',
                event: 'tap',
                delegate: '#BtnIptal'
            },
            {
                fn: 'onBtnKaydetTap',
                event: 'tap',
                delegate: '#BtnKaydet'
            },
            {
                fn: 'onPanelInitialize',
                event: 'initialize'
            }
        ]
    },

    onBtnIptalTap: function(button, e, eOpts) {
        //
    },

    onBtnKaydetTap: function(button, e, eOpts) {
        //
    },

    onPanelInitialize: function(component, eOpts) {
        //
    }

});