(function () {
    "use strict";

    var nav = WinJS.Navigation;
    var ui = WinJS.UI;
    
    ui.Pages.define("/pages/groupedItems/groupedItems.html", {
        // This function is called to initialize the page.
        init: function (element, options) {
            this.groupHeaderInvoked = ui.eventHandler(this._groupHeaderInvoked.bind(this));
            this.itemInvoked = ui.eventHandler(this._itemInvoked.bind(this));            
        },

        // This function is called whenever a user navigates to this page.
<<<<<<< HEAD
        ready: function (element, options) {                             
=======
        ready: function (element, options) {
            var username = WinJS.Application.sessionState.user;
            document.getElementById("userInfo").innerHTML = "<h3>" + username + "</h3>";

            var logout = document.getElementById("logoutLink");
            logout.addEventListener("click", this.logout, false);

            var map = document.getElementById("viewButton");
            map.addEventListener("click", this.viewPage, false);
>>>>>>> map
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },

        _groupHeaderInvoked: function (args) {
            var group = Data.groups.getAt(args.detail.groupHeaderIndex);
            nav.navigate("/pages/groupDetail/groupDetail.html", { groupKey: group.key });
        },

        _itemInvoked: function (args) {
            var item = Data.items.getAt(args.detail.itemIndex);
            nav.navigate("/pages/itemDetail/itemDetail.html", { item: Data.getItemReference(item) });
        },
<<<<<<< HEAD
=======

        logout: function()
        {
            WinJS.Application.sessionState.securityToken = null;
            nav.navigate("/pages/login/login.html");
        },

        viewPage : function()
        {
            nav.navigate("pages/chart/chart_container.html");
        }
>>>>>>> map
    });
})();
