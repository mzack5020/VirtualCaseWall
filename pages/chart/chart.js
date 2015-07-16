(function () {
    "use strict";
    console.log("in chart.js");

    // Load the Visualization API and the piechart package.
    google.load('visualization', '1.0', { 'packages': ['corechart'] });
    google.setOnLoadCallback(drawLineChart);//have this call something that loads the events, then when finished does the drawLineChart

    //readPersonFromPeopleFile("Richard Matt", doPersonAction);

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
})();
function drawLineChart() {
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
        vAxis: { title: "Events", 
            titleTextStyle: {color: 'orange', fontSize:20}
            
         },
        
        curveType: 'none',
        legend: { position: 'left' },
        backgroundColor: '#D6D6C2'
      
        };

        var plot = new google.visualization.LineChart(document.getElementById('lineChart'));
  
        plot.draw(data, properties);

    }