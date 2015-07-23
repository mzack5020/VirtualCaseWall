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

    //this increments the frequencies for the days
    for (var i = 0; i < personObject.events.length; i++) {
        var date = new Date(personObject.events[i].date);
        dayFreq[dayMap[date.getDay()]] = dayFreq[dayMap[date.getDay()]] + 1;
    }

    //create a date for the current date
    //get the day for the current date, use the dayMap to get the name, then add that name to a list of last 7 days
    //decrement current date by however many milliseconds a day is
    //repeat process

    var DAY_IN_MILLIS = 86400000;
    var currentDate = new Date();
    var currentDateMillis = currentDate.getTime();
    var lastSevenDays = [];

    for (var i = 0; i < 7; i++) {
        currentDate.setTime(currentDateMillis - (i * DAY_IN_MILLIS));
        var dayIndex = currentDate.getDay();
        lastSevenDays[i] = dayMap[dayIndex];
    }



    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Events');
    data.addRows([
        [lastSevenDays[6], dayFreq[lastSevenDays[6]]],
        [lastSevenDays[5], dayFreq[lastSevenDays[5]]],
        [lastSevenDays[4], dayFreq[lastSevenDays[4]]],
        [lastSevenDays[3], dayFreq[lastSevenDays[3]]],
        [lastSevenDays[2], dayFreq[lastSevenDays[2]]],
        [lastSevenDays[1], dayFreq[lastSevenDays[1]]],
        [lastSevenDays[0], dayFreq[lastSevenDays[0]]]

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

