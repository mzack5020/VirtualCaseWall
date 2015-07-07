(function () {
    "use strict";
    console.log("itemDetail.js");
    //why does itemDetail need these images? it probably doesnt
	var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";
    var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
    var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";

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
          
            var text = "<h4>Aliases: ";
            if (person.aliases[0] != "")
                text += person.aliases[0] + ", ";
            if (person.aliases[1] != "")
                text += person.aliases[1] + ", ";
            if (person.aliases[2] != "")
                text += person.aliases[2] + "</h4>";            

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
        },
    });
})();
