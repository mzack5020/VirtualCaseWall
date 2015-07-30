// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var nav = WinJS.Navigation;

    WinJS.UI.Pages.define("/pages/forgotPassword/forgotPassword.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            //var usernameReset = document.getElementById("usernameReset");
            //usernameReset.addEventListener("click", this.resetUsername, false);

            var emailReset = document.getElementById("emailReset");
            emailReset.addEventListener("click", this.resetEmail, false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },

        resetUsername: function()
        {
            nav.navigate("pages/login/login.html");
        },

        resetEmail: function()
        {
            nav.navigate("pages/login/login.html");
        }
    });
})();
