(function () {
    "use strict";

    WinJS.UI.Pages.define("default.html", {
        ready: function (element, options) {
            element.querySelector("#home").addEventListener("click", goHome, false);
            element.querySelector("myCases").addEventListener("click", myCases, false);
            element.querySelector("#maps").addEventListener("click", maps, false);
            element.querySelector("#logout").addEventListener("click", terminateLoginScreen, false);
        }
    })

    function goHome() {
        nav.navigate("pages/groupedItems/groupedItems.html");
    }

    function myCases() {
        nav.navigate("pages/groupedItems/groupedItems.html");
    }

    function maps() {
        nav.navigate("pages/map/map_container.html");
    }

    function terminateLoginScreen() {
        document.getElementById("topRight").hidden = true;
        document.getElementById("appbar").hidden = true;
        WinJS.Application.sessionState.securityToken = "";
        nav.navigate("pages/login/login.html");
    }
})();