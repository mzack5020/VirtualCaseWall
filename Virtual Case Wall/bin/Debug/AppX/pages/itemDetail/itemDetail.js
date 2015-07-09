(function () {
    "use strict";
    console.log("itemDetail.js");

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = Data.resolveItemReference(options.item);
            element.querySelector(".titlearea .pagetitle").textContent = item.title;

            //now people is a map that can be accessed by casenumber
            var person = WinJS.Application.sessionState.people[item.title];


            //set profile photo
            document.getElementById("photo").style.backgroundImage = "url(data:images/png;base64," + person.photo + ")";
            document.getElementById("photo").style.backgroundSize = "100%"

            // Add details to right panel div
            
            if (person.aliases[0] != null)
                var text = "<h4>Aliases: " + person.aliases[0];
            if (person.aliases[1] != null)
                text += ", " + person.aliases[1];
            if (person.aliases[2] != null)
                text += ", " + person.aliases[2] + "</h4>";

            text += "<h4>Sex: Male</h4>";
            text += "<h4>Race: White</h4>";
            text += "<h4>Date of Birth: June 14, 1980</h4>";
            text += "<h4>Place of Birth: Queens, NY</h4>";
            text += "<h4>Height: 5' 10\"</h4>";
            text += "<h4>Weight: 165 lbs</h4>";
            text += "<h4>Eyes: Green</h4>";
            text += "<h4>Hair: Brown</h4>";
            text += "<h4>Skintone: Light</h4>";
            document.getElementById("rightText").innerHTML = text;

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

            document.getElementById("newsFeed").innerHTML = text;
        },
    });
})();
