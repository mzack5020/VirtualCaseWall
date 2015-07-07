// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    console.log("in login.js");
    var nav = WinJS.Navigation;
    var roamingSettings = Windows.Storage.ApplicationData.current.roamingSettings;
    var sessionSettings = WinJS.Application.sessionState;


    WinJS.UI.Pages.define("/pages/login/login.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var submitButton = document.getElementById("submitButton");
            submitButton.addEventListener("click", this.terminateLoginScreen, false);

            var forgotButton = document.getElementById("forgotPassword");
            forgotButton.addEventListener("click", this.getCreds, false);

            var username = roamingSettings.values["user"];
            if(username)
                document.getElementById("username").innerText = username;
            var securityToken = sessionSettings.securityToken;
            if(securityToken)
                nav.navigate("pages/groupedItems/groupedItems.html");
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
            
            WinJS.xhr({
                type: "POST",
                url: "http://10.201.28.91:8090/VirtualCaseWall/api/login",
                data: loginStr,
                responseType: "String",
            }).done(function (result) {
                var json = JSON.parse(result.responseText);
                user.secToken = json.access_token;
                user.username = json.username;
                
                if (user.secToken == "")
                    document.getElementById("JSON").innerText += "<h2>Incorrect credentials</h2>";
                else {
                    sessionSettings.user = user.username;
                    roamingSettings.values["user"] = user.username;
                    sessionSettings.securityToken = user.secToken;  //here it sets that token, I don't think it will ever be seen
                    nav.navigate("pages/groupedItems/groupedItems.html");
                    document.getElementById("topRight").hidden = false;
                    document.getElementById("profile").innerText = user.username;
                    document.body.style.backgroundColor = "red";
                }

            }, function error(result) {
                document.getElementById("JSON").innerText = "Incorrect Credentials";
            });            

        }
    });
})();
