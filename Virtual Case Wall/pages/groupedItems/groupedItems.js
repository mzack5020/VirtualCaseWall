(function () {
    "use strict";
    //console.log("groupedItems.js");
    var nav = WinJS.Navigation;
    var ui = WinJS.UI;

    function search(searchCriteria) {
        var people = WinJS.Application.sessionState.people;
        var keys = Object.keys(people);
        var searchIndex = -1;
        for (var i = 0; i < keys.length; i++) {

            if (keys[i].search(searchCriteria) != -1) {
                searchIndex = i;
                var object = document.createElement("div");
                object.innerHTML += "<h1> - Search Results - </h1>" + "<h3>" + people[keys[i]].casenumber + "</h3>";
            }
        }

        nav.navigate("pages/searchResults/searchResults.html", object);
    }

    ui.Pages.define("/pages/groupedItems/groupedItems.html", {
        // This function is called to initialize the page.
        init: function (element, options) {
            this.groupHeaderInvoked = ui.eventHandler(this._groupHeaderInvoked.bind(this));
            this.itemInvoked = ui.eventHandler(this._itemInvoked.bind(this));
        },

        // This function is called whenever a user navigates to this page.

        ready: function (element, options) {
            var searchBox = document.getElementById("searchBox");
            
            searchBox.onkeypress = function (e) {
                if (!e) e = window.event;
                var keyCode = e.keyCode || e.which;
                if (keyCode == '13') {
                    var blank = document.getElementById("searchBox");
                    search(document.getElementById("searchBox").value);
                }
            }
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
            //here we can route this based on the group.key of the item that is invoked

            if (item.title == "Add Profile") {
                nav.navigate("/pages/profile/profile.html");
            }

            else if (item.group.key == 1) {
                nav.navigate("/pages/itemDetail/itemDetail.html", { item: Data.getItemReference(item) });
            } else if (item.group.key == 3) {
                nav.navigate("/pages/itemDetail/public_figures.html")

            } else {
                nav.navigate("/pages/error/error.html", { item: Data.getItemReference(item) });
            }



            //console.log(item.group.key + " that was the group.key");
        },

        logout: function()
        {
            WinJS.Application.sessionState.securityToken = null;
            nav.navigate("/pages/login/login.html");
        },        
    });    
})();
