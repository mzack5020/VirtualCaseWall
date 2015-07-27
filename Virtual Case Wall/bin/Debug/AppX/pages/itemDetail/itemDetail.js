(function () {
    "use strict";


    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {

        ready: function (element, options) {

            var item = Data.resolveItemReference(options.item);
            element.querySelector(".titlearea .pagetitle").textContent = item.title;
            ////now people is a map that can be accessed by casenumber
            var person = WinJS.Application.sessionState.people[item.title];
            //var chartIframe = document.getElementById("chart");

            var chartDoc = document.getElementById("chart");
            chartDoc.contentWindow.postMessage(person, "*");

            var mapDoc = document.getElementById("mapPanel");
            mapDoc.contentWindow.postMessage(person, "*");

            //set profile photo
            document.getElementById("profilePhoto").style.backgroundImage = "url(data:images/png;base64," + person.photo + ")";
            document.getElementById("profilePhoto").style.backgroundSize = "100%"

            // Add details to right panel div

            if (person.aliases[0] != "")
                document.getElementById("aliases").innerText += person.aliases[0];
            if (person.aliases[1] != "")
                document.getElementById("aliases").innerText += (', ' + person.aliases[1]);

            document.getElementById("sex").innerText += person.sex;
            document.getElementById("race").innerText += person.race;
            document.getElementById("dateOfBirth").innerText += person.dateOfBirth;
            document.getElementById("placeOfBirth").innerText += person.placeOfBirth;
            document.getElementById("height").innerText += person.height;
            document.getElementById("weight").innerText += person.weight;
            document.getElementById("eyeColor").innerText += person.eyeColor;
            document.getElementById("hairColor").innerText += person.hairColor;
            document.getElementById("skinTone").innerText += person.skinTone;

            var text;
            text = "<h1 id='title'>News Feed</h1>";

            for (var i = 0; i < person.events.length; i++) {
                switch (person.events[i].type) {
                    case "text":
                        {
                            text += "<h4>" + (i + 1) + ") " + person.casenumber + " texted " + person.events[i].toValue + " from " + person.events[i].value + " on " + new Date(person.events[i].date).toString() + "</h4><br />";
                            break;
                        }
                    case "call":
                        {
                            text += "<h4>" + (i + 1) + ") " + person.casenumber + " called " + person.events[i].toValue + " from " + person.events[i].value + " on " + new Date(person.events[i].date).toString() + "</h4><br />";
                            break;
                        }
                    case "email":
                        {
                            text += "<h4>" + (i + 1) + ") " + person.casenumber + " emailed " + person.events[i].toValue + " from " + person.events[i].value + " on " + new Date(person.events[i].date).toString() + "</h4><br />";
                            break;
                        }
                    case "location":
                        {
                            text += "<h4>" + (i + 1) + ") " + person.casenumber + " was spotted at " + person.events[i].value + " on " + new Date(person.events[i].date).toString() + "</h4><br />";
                            break;
                        }
                    default:
                        {
                            text += "<h4>" + (i + 1) + ") Uncategorized event occured - To: " + person.events[i].toValue + "; From: " + person.events[i].value + "; on " + new Date(person.events[i].date).toString() + "</h4><br />";
                            break;
                        }
                }
            }

            document.getElementById("feed").innerHTML = text;
        },
    });
})();
