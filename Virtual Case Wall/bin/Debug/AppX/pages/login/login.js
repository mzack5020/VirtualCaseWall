// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var nav = WinJS.Navigation;

    WinJS.UI.Pages.define("/pages/login/login.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var submitButton = document.getElementById("submitButton");
            submitButton.addEventListener("click", this.terminateLoginScreen, false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },                
               
        terminateLoginScreen: function() 
        {
            //var div = document.getElementById("loginScreen");
            //while (div.firstChild)
            //    div.removeChild(div.firstChild);
            nav.navigate("pages/groupedItems/groupedItems.html");
        }
    });
})();
