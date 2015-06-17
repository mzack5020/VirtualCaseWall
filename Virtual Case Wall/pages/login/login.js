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
            var user = {
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                secToken: "",
                       };
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var loginStr = { "username": username, "password": password };
            loginStr = JSON.stringify(loginStr);

            //var httpModule = new Windows.Web.Http.HttpClient();
            //var userInfo = httpModule.postAsync("http://156.80.138.161:8090/VirtualCaseWall/api/login", loginStr);
            
            WinJS.xhr({
                type: "POST",
                url: "http://156.80.138.161:8090/VirtualCaseWall/api/login",
                data: loginStr,
                responseType: "String",
            }).done(function (result) {
                var json = JSON.parse(result.responseText);
                user.secToken = json.access_token;
                user.username = json.username;
                
                if (user.secToken == "")
                    document.getElementById("JSON").innerText += "<h2>Incorrect credentials</h2>";
                else
                    nav.navigate("pages/groupedItems/groupedItems.html");

            }, function error(result) {
                document.getElementById("JSON").innerText = "Incorrect Credentials";
            });            
        }
    });
})();
