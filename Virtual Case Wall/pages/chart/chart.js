
var personObject;



window.addEventListener("message", function (e) {
    console.log(e.data);
    personObject = e.data;
    console.log("Got Data");
    google.load('visualization', '1.0', {
        'packages': ['corechart'],
        'callback': drawLineChart
    });

});

(function () {
    "use strict";
    console.log("in chart.js");
    // Load the Visualization API and the piechart package.

    var sessionSettings = WinJS.Application.sessionState;

    WinJS.UI.Pages.define("/pages/chart/chart.html", {

            ready: function (element, options) {


        }
    });
})();



function drawLineChart() {
    console.log("Drawing Chart: " + personObject.casenumber);
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
