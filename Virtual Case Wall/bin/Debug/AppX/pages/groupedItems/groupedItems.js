﻿(function () {
    "use strict";
    console.log("groupedItems.js");
    var nav = WinJS.Navigation;
    var ui = WinJS.UI;
    ui.Pages.define("/pages/groupedItems/groupedItems.html", {
        // This function is called to initialize the page.
        init: function (element, options) {
            this.groupHeaderInvoked = ui.eventHandler(this._groupHeaderInvoked.bind(this));
            this.itemInvoked = ui.eventHandler(this._itemInvoked.bind(this));
        },

        // This function is called whenever a user navigates to this page.

        ready: function (element, options) {           
            var appbar = document.getElementById("appbar");
            var refreshButton = document.createElement("BUTTON");
            refreshButton.setAttribute("data-win-control", "WinJS.UI.AppBarCommand");
            refreshButton.setAttribute("data-win-options", "{id:'refresh', label:'Refresh', icon:'refresh', tooltip:'Refresh Page'}");
            
            document.getElementById("appbar").appendChild(refreshButton);
            var temp = document.childNodes[document.childNodes.length];
            document.childNodes[document.childNodes.length] = document.childNodes[(document.childNodes.length - 1)];
            document.childNodes[(document.childNodes.length - 1)] = temp;
            WinJS.UI.process(refreshButton);
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },
        //so these are basically event handlers that handle navigation
        _groupHeaderInvoked: function (args) {
            var group = Data.groups.getAt(args.detail.groupHeaderIndex);
            nav.navigate("/pages/groupDetail/groupDetail.html", { groupKey: group.key });
        },
        _itemInvoked: function (args) {
            var item = Data.items.getAt(args.detail.itemIndex);
            nav.navigate("/pages/itemDetail/itemDetail.html", { item: Data.getItemReference(item) });
        },

        logout: function()
        {
            WinJS.Application.sessionState.securityToken = null;
            nav.navigate("/pages/login/login.html");
        },        
    });
})();
