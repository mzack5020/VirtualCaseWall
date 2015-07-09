﻿(function () {
    "use strict";
    console.log("itemDetail.js");

    var nav = WinJS.Navigation;

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = Data.resolveItemReference(options.item);
            element.querySelector(".titlearea .pagetitle").textContent = item.title;

            if (!item.title)
                nav.navigate("pages/profile/profile.html");

            else
            {
                //now people is a map that can be accessed by casenumber
                var person = WinJS.Application.sessionState.people[item.title];


                //set profile photo
                document.getElementById("photo").style.backgroundImage = "url(data:images/png;base64," + person.photo + ")";
                document.getElementById("photo").style.backgroundSize = "100%"

                // Add details to right panel div

                var text = "<h4>Aliases: ";
                if (person.aliases[0] != "")
                    text += person.aliases[0];
                if (person.aliases[1] != "")
                    text += ", " + person.aliases[1];
                if (person.aliases[2] != "")
                    text += ", " + person.aliases[2] + "</h4>";

                text += "<h4>Sex: " + person.sex + "</h4>";
                text += "<h4>Race: " + person.race + "</h4>";
                text += "<h4>Date of Birth: " + person.dateOfBirth + "</h4>";
                text += "<h4>Place of Birth: " + person.placeOfBirth + "</h4>";
                text += "<h4>Height: "+ person.height + "</h4>";
                text += "<h4>Weight: " + person.weight + "</h4>";
                text += "<h4>Eyes: " + person.eyeColor + "</h4>";
                text += "<h4>Hair: " + person.hairColor + "</h4>";
                text += "<h4>Skintone: " + person.skinTone + "</h4>";
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
            }
        },
    });
})();
