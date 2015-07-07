// For an introduction to the Grid template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=232446
(function () {
    "use strict";

    var activation = Windows.ApplicationModel.Activation;
    var app = WinJS.Application;
    var nav = WinJS.Navigation;
    var sched = WinJS.Utilities.Scheduler;
    var ui = WinJS.UI;

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }

            nav.history = app.sessionState.history || {};
            nav.history.current.initialPlaceholder = true;

            // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
            ui.disableAnimations();
            var p = ui.processAll().then(function () {
                return nav.navigate(nav.location || Application.navigator.home, nav.state);
            }).then(function () {
                return sched.requestDrain(sched.Priority.aboveNormal + 1);
            }).then(function () {
                ui.enableAnimations();
            });

            args.setPromise(p);

            var submitButton = document.getElementById("logoutLink");
            submitButton.addEventListener("click", terminateLoginScreen, false);
            document.getElementById("topRight").hidden = true;
            document.getElementById("appbar").hidden = true;

            var map = document.getElementById("maps");
            map.addEventListener("click", viewPage, false);

            var logout = document.getElementById("logout");
            logout.addEventListener("click", terminateLoginScreen, false);

            var home = document.getElementById("home");
            home.addEventListener("click", goHome, false);
            
            var appBarMap = document.getElementById("appBarMap");
            appBarMap.addEventListener("click", viewPage, false);

        }
    });

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        app.sessionState.history = nav.history;
    };

    function terminateLoginScreen()
    {
        document.getElementById("topRight").hidden = true;
        document.getElementById("appbar").hidden = true;
        WinJS.Application.sessionState.securityToken = "";        
        nav.navigate("pages/login/login.html");        
    }

    function goHome()
    {
        nav.navigate("pages/groupedItems/groupedItems.html");
    }

    function viewPage()
    {
        nav.navigate("pages/chart/chart_container.html");
    }

    app.start();
})();
