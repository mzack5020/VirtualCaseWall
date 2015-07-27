var personObject;
var phoneIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAXVBMVEX///+cnJx/f3+4 uLjr6+uZmZnw8PAwMDA8PDwICAj4+PjX19d6enpMTExeXl45OTkAAACoqKjc3NxkZGRI SEiFhYUaGhpUVFTHx8eioqKwsLAWFhYNDQ3i4uIlJSUwTnkKAAAArUlEQVQYlW1QWRKC MAxN96Y7CAgq3v+Ytik4jGO+Mi/ztgC00cwiWqbhOyLmFELKURyA40bJtkhluCOIWw9b oN1bTizjnbL4oLM3laujAoH5mbu2ihpYljCU1zTtBMnMwCaAFVG4wyxZwFDJ5jWegQIS BHPZLlAjwv42O3jlOrHJA7BaJ+HQ5VuI2uBWilmMpBAtajO/F7TLSlF7oeo6T2w8Cl1q s7P2n+f8vvAD2fQHYIkbDjQAAAAASUVORK5CYII=";
var locationIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAA AAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtz IENTM5jWRgMAAAAVdEVYdENyZWF0aW9uIFRpbWUAMi8xNy8wOCCcqlgAAAQRdEVYdFhN TDpjb20uYWRvYmUueG1wADw/eHBhY2tldCBiZWdpbj0iICAgIiBpZD0iVzVNME1wQ2Vo aUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0 YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDQuMS1jMDM0IDQ2LjI3Mjk3NiwgU2F0 IEphbiAyNyAyMDA3IDIyOjExOjQxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpy ZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgog ICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxu czp4YXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eGFw OkNyZWF0b3JUb29sPkFkb2JlIEZpcmV3b3JrcyBDUzM8L3hhcDpDcmVhdG9yVG9vbD4K ICAgICAgICAgPHhhcDpDcmVhdGVEYXRlPjIwMDgtMDItMTdUMDI6MzY6NDVaPC94YXA6 Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhhcDpNb2RpZnlEYXRlPjIwMDgtMDMtMjRUMTk6 MDA6NDJaPC94YXA6TW9kaWZ5RGF0ZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAg ICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5z OmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CiAgICAgICAgIDxk Yzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0 aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgIDUdUmQAAAFFSURBVDiNjZKxbsIwEIY/O3kM2DpH6hOU bpiZx6gEAyMSyVvkIZhttrYSewfWbkXZs0aJr0PjKgkJ4qbT3e/f39mnRIQQSikAjDEL IAVe2tYnkFprPxiEGhoYY1Lg0DQNoaeUIooigMxam04arFarBfDuve8RBY3WGuC1S6IH RIdwOEkS8jwnz3OSJAGg7R3uEUhd12itOR6PPef1eo33njiOsdaqKYJeVFVFVVX3JDcG 3yHJsoyiKCiKgizLRjUA8cDgrLV+EhEulwu73e6/ISLhEc/3CLZa61JE8N4jInRzrXUJ bCcNnHMlsGlv6s/6V9tYa8tu/WaRAIwxP3Vdz7p7EMfx1Tk37+rHRgix71K0+X5MOEoQ KJqmmQFEUXR1zs0DzSMEAG8T+WMEAMvl8gvgdDo9h9qQYLgHfXelel82PAzwCyCSpjnA W7gIAAAAAElFTkSuQmCC";
var emailIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAMAAABcxfTLAAAABlBMVEX///8AAABVwtN+ AAAALUlEQVQImWNgRAUMQIQAID4DQgDKY4RzobKMMC6MjyCg6kEmw9SjmYduHyoAABU4 AERJ+tqXAAAAAElFTkSuQmCC";
var textIcon = "data:image/png;base64,R0lGODlhCwAPAOZMAJyy1tHX4X6StMvW49DU2nl8gQADSDhDW5uXlxMzXUtslf/ystfa 3+vr6yc3TSZAazA+WcvU4v//79zPvoefu87c8czT3MvQ2YaYuNPa5OfMr6CUgF5yjjRa iv/mshovSOTn7JFjH+fn5Nbg7U5SWPvoyj1TeGeCo3daMSQSACwcEP/ms/7//9DJupFk IQ8mSe7r6QIAADkqE/Ln1YtgJP/xyCQpPCQWABsuRkYzFisgE5VuOlZvj0QAAOvv9OTn 7f/yyEtAOisdE8GLM//grZZvNkYyFnddMejOsB4lOQAAAP///////wAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAEwALAAA AAALAA8AAAeHgEyCgzNDg4I+MCMsPTEigz9BLzZJJh0kIIIEH0UuNCE7OASCFQIrGkga HgIVggMAS7GxAAOCERSysRQRghkGChgnGAoGGYIBCRwPPA8cCQGCFgcLG0QbCwcWghcO EwUtBRMOF4IMEEAIJQg1EAyCDUopSipKN0oNghJHOkYyOUIoJBwaOCgQADs=";
var dayMap = new Array(7);
dayMap[0] = "Sunday";
dayMap[1] = "Monday";
dayMap[2] = "Tuesday";
dayMap[3] = "Wednesday";
dayMap[4] = "Thursday";
dayMap[5] = "Friday";
dayMap[6] = "Saturday";

window.addEventListener("message", function (e) {
    personObject = e.data;
    google.load('visualization', '1.0', {
        'packages': ['corechart'],
        'callback': drawLineChart
    });

});

(function () {
    "use strict";
    var sessionSettings = WinJS.Application.sessionState;

    WinJS.UI.Pages.define("/pages/chart/chart.html", {

            ready: function (element, options) {

        }
    });
})();

function drawLineChart() {


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

    var DAY_IN_MILLIS = 86400000;
    var currentDate = new Date();
    var currentDateMillis = currentDate.getTime();
    var lastSevenDays = [];

    for (var i = 0; i < 7; i++) {
        currentDate.setTime(currentDateMillis - (i * DAY_IN_MILLIS));
        var dayIndex = currentDate.getDay();
        lastSevenDays[i] = dayMap[dayIndex];
    }



    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Days');
    dataTable.addColumn('number', 'Events');
    dataTable.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true }});
    dataTable.addRows([
        [lastSevenDays[6], dayFreq[lastSevenDays[6]], getCustomHtml(personObject, lastSevenDays[6])],
        [lastSevenDays[5], dayFreq[lastSevenDays[5]], getCustomHtml(personObject, lastSevenDays[5])],
        [lastSevenDays[4], dayFreq[lastSevenDays[4]], getCustomHtml(personObject, lastSevenDays[4])],
        [lastSevenDays[3], dayFreq[lastSevenDays[3]], getCustomHtml(personObject, lastSevenDays[3])],
        [lastSevenDays[2], dayFreq[lastSevenDays[2]], getCustomHtml(personObject, lastSevenDays[2])],
        [lastSevenDays[1], dayFreq[lastSevenDays[1]], getCustomHtml(personObject, lastSevenDays[1])],
        [lastSevenDays[0], dayFreq[lastSevenDays[0]], getCustomHtml(personObject, lastSevenDays[0])]

    ]);

    var options = {
        title: 'Latest Activity',
        subtitle: 'July',
        titleTextStyle: {
            color: 'black',
            fontSize: 24

        },
        vAxis: {
            title: "Events",
            titleTextStyle: { color: 'black', fontSize: 20 }

        },

        curveType: 'none',
        tooltip: {isHtml:true},
        legend: { position: 'none' },
        backgroundColor: 'white',
        pointSize : "10"
    };

    var plot = new google.visualization.LineChart(document.getElementById('lineChart'));
  
    plot.draw(dataTable, options);
}

//so this function basically should be able to display the strings for each of the events we are hovering over
//I want a box with the day in bold at the top then a numbered list of the events for that day

function getCustomHtml(person, day) {
    var html = '<div style="border-style: solid; border-width : 2px;"><b>' + day + '</b><br>';
    var counter = 1;
    var date = new Date();
    for (var i = 0; i < person.events.length; i++) {
        date.setTime(person.events[i].date);
        if (dayMap[date.getDay()] == day) {
            switch (person.events[i].type) {
                case "text":
                    {
                        html += '<img src="' + textIcon + '"/><div style="margin-bottom: 1px;">' + person.casenumber + " texted " + person.events[i].toValue + " from " + person.events[i].value + "</div><br />";
                        break;
                    }
                case "call":
                    {
                        html += '<img src="' + phoneIcon + '"/><div style="margin-bottom: 1px;">' + person.casenumber + " called " + person.events[i].toValue + " from " + person.events[i].value + "</div><br />";
                        break;
                    }
                case "email":
                    {
                        html += '<img src="' + emailIcon + '"/><div style="margin-bottom: 1px;">' + person.casenumber + " emailed " + person.events[i].toValue + " from " + person.events[i].value + "</div><br />";
                        break;
                    }
                case "location":
                    {
                        html += '<img src="' + locationIcon + '"/><div style="margin-bottom: 1px;">' + person.casenumber + " was spotted at " + person.events[i].value + "</div><br />";
                        break;
                    }
                default:
                    {
                        html += '<img src="' + phoneIcon + '"/><div style="margin-bottom: 1px;">' + " Uncategorized event occured - To: " + person.events[i].toValue + " From: " + person.events[i].value + "</div><br />";
                        break;
                    }
            }
            counter++;
        }
    }
    html += '</div>';
    return html;
}

