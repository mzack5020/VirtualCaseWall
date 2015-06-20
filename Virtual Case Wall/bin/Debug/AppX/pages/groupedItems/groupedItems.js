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
        ready: function (element, options) {
            var feedQuery = ["Beyonce divorces Jay-Z and marries a SEDI intern (Ryan P.)",
                     "Donald Trump makes another zillion dollars.",
                     "Obama leaves the White House in a Cadillac Coupe DeVille."
            ];
            
            var list = document.createElement("ul");
            list.id = "feedItems";

            for (var feedItem = 0; feedItem < feedQuery.length; feedItem++) {
                var newItem = document.createElement("li");
                newItem.innerText = feedQuery[feedItem];
                newItem.innerHTML += "<br />";
                list.appendChild(newItem);
            }
            
            document.getElementById("newsfeed").appendChild(list);
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
    });
})();
