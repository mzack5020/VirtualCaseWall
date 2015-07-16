var personObject;

window.addEventListener("message", function (e) {
    personObject = e.data;
    google.load('visualization', '1.0', {
        'packages': ['corechart'],
        'callback': drawLineChart
    });

});

(function () {
    "use strict";
    // Load the Visualization API and the piechart package.

    var sessionSettings = WinJS.Application.sessionState;

    WinJS.UI.Pages.define("/pages/chart/chart.html", {

            ready: function (element, options) {

        }
    });
})();

function drawLineChart() {

    var dayMap = new Array(7);
    dayMap[0] = "Sunday";
    dayMap[1] = "Monday";
    dayMap[2] = "Tuesday";
    dayMap[3] = "Wednesday";
    dayMap[4] = "Thursday";
    dayMap[5] = "Friday";
    dayMap[6] = "Saturday";

    var dayFreq = {};
    dayFreq["Sunday"] = 0;
    dayFreq["Monday"] = 0;
    dayFreq["Tuesday"] = 0;
    dayFreq["Wednesday"] = 0;
    dayFreq["Thursday"] = 0;
    dayFreq["Friday"] = 0;
    dayFreq["Saturday"] = 0;

    for (var i = 0; i < personObject.events.length; i++) {
        var date = new Date(personObject.events[i].date);
        dayFreq[dayMap[date.getDay()]] = dayFreq[dayMap[date.getDay()]] + 1;
    }

    var ONE_DAY_IN_MILLIS = 1000*60*60*24;
    var curr = new Date();

    var offset = curr.getDay() * ONE_DAY_IN_MILLIS;

    // Date at the start of week; note that hours, minutes and seconds are != 0
    var start = new Date( curr.getTime() - offset );

    for( var i=0; i < 7; i++ ) {
        var nextDay = new Date(start.getTime() - (i * ONE_DAY_IN_MILLIS));
        console.log(dayMap[nextDay.getDay()]);
    }


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Events');
    data.addRows([
        ['Thurs 9', 30],
        ['Wed 8', 14],
        ['Tues 7', 25],
        ['Mon 6', 10],
        ['Sun 5', 14],
        ['Sat 4', 20],
        ['Fri 3', 42]

    ]);

    var properties = {
        title: 'Latest Activity',
        subtitle: 'July',
        titleTextStyle: {
            color: 'orange',
            fontSize: 24

        },
        vAxis: {
            title: "Events",
            titleTextStyle: { color: 'orange', fontSize: 20 }

        },

        curveType: 'none',
        legend: { position: 'left' },
        backgroundColor: '#D6D6C2'
    };

    var plot = new google.visualization.LineChart(document.getElementById('lineChart'));
  
    plot.draw(data, properties);
}

