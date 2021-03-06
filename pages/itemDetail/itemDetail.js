﻿(function () {
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
          
            var text = "<h3>Aliases: ";
            if (person.aliases[0] != "")
                text += person.aliases[0] + ", ";
            if (person.aliases[1] != "")
                text += person.aliases[1] + ", ";
            if (person.aliases[2] != "")
                text += person.aliases[2] + "</h3>";            

            text += "<h3>Sex: Male</h3>";
            text += "<h3>Race: White</h3>";
            text += "<h3>Date of Birth: June 14, 1980</h3>";
            text += "<h3>Place of Birth: Queens, NY</h3>";
            text += "<h3>Height: 5' 10\"</h3>";
            text += "<h3>Weight: 165 lbs</h3>"
            text += "<h3>Eyes: Green</h3>";
            text += "<h3>Hair: Brown</h3>";
            text += "<h3>Skintone: Light</h3>";
            document.getElementById("rightText").innerHTML = text;

            // News Feed
            text = "<h1>News Feed</h1><br />";

            for(var i = 0; i < person.events.length; i++)
            {
                switch (person.events[i].type)
                {
                    case "email":
                        {
                            text += "<h4>" + (i+1) + ") " + person.casenumber + " emailed " + person.events[i].toValue + " on " + new Date(person.events[i].date) + ".</h4><br />";
                            break;
                        }
                    case "location":
                        {
                            text += "<h4>" + (i+1) + ") " + person.casenumber + " was spotted at " + person.events[i].value + " on " + new Date(person.events[i].date) + ".</h4><br />";
                            break;
                        }
                    case "call":
                        {
                            text += "<h4>" + (i+1) + ") " + person.casenumber + " called " + person.events[i].toValue + " from " + person.events[i].value + " on " + new Date(person.events[i].date) + ".</h4><br />";
                            break;
                        }
                    case "text":
                        {
                            text += "<h4>" + (i+1) + ") " + person.casenumber + " texted " + person.events[i].toValue + " from " + person.events[i].value + " on " + new Date(person.events[i].date) + ".</h4><br />";
                            break;
                        }
                    default:
                        {
                            text += "<h4>" + (i+1) + ") " + person.casenumber + " " + person.events[i].type + " " + person.events[i].toValue + " on " + new Date(person.events[i].date) + ".</h4><br />";
                            break;
                        }
                }
            }

            document.getElementById("newsFeed").innerHTML = text;
        },
    });
})();
