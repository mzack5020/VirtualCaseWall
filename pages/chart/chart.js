(function () {
    "use strict";
    console.log("in chart.js");

    // Load the Visualization API and the piechart package.
    google.load('visualization', '1.0', { 'packages': ['corechart'] });
    google.setOnLoadCallback(drawLineChart);//have this call something that loads the events, then when finished does the drawLineChart

    var sessionSettings = WinJS.Application.sessionState;

    WinJS.UI.Pages.define("/pages/chart/chart.html", {

        ready: function (element, options) {
            //we might be losing this somehow.
            //var sessionStatePeople = WinJS.Application.sessionState.people;
            //console.log(sessionStatePeople);
            //var person = WinJS.Application.sessionState.people['Richard Matt'];
            //consle.log(person.casenumber);
            //get the events
            //get everything we need from the events
            //draw chart with event data
            //console.log("this was called");
            var person = WinJS.Application.sessionState.people['Richard Matt'];
            console.log(person.casenumber);

        }
    });

    function drawLineChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Months');
        data.addColumn('number', 'Events');
        data.addRows([
            ['January', 5],
            ['February', 20],
            ['March', 4],
            ['April', 3],
            ['May', 4],
            ['June', 5],
            ['July', 8],
            ['August', 20],
            ['September', 9],
            ['October', 8],
            ['November', 14],
            ['December', 25]
        ]);

        var properties = {
            title: 'Activity History',
            curveType: 'none',
            legend: { position: 'bottom' }

        };

        var plot = new google.visualization.LineChart(document.getElementById('lineChart'));

        plot.draw(data, properties);
    }
})();
    
