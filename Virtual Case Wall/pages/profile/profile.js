// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var tempEvents = [];

    WinJS.UI.Pages.define("/pages/profile/profile.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.            
            var addPhoto = document.getElementById("photo");
            addPhoto.addEventListener("click", this.newPhoto, false);

            var addLocation = document.getElementById("addLocation");
            addLocation.addEventListener("click", this.newLocation, false);
            var addAliases = document.getElementById("addAlias");
            addAliases.addEventListener("click", this.newAlias, false);
            var addPhone = document.getElementById("addPhone");
            addPhone.addEventListener("click", this.newPhone, false);
            var addAddress = document.getElementById("addAddress");
            addAddress.addEventListener("click", this.newAddress, false);
            var addEmail = document.getElementById("addEmail");
            addEmail.addEventListener("click", this.newEmail, false);
            var addEvent = document.getElementById("addEvent");
            addEvent.addEventListener("click", this.newEvent, false);

            var saveButton = document.getElementById("save");
            saveButton.addEventListener("click", this.saveProgress, false);
            var finishButton = document.getElementById("finish");
            finishButton.addEventListener("click", this.submitProgress, false);

            document.getElementById("newProfilePreview").hidden = true;
            document.getElementById("newInput").hidden = true;

            document.getElementById("previewLocation").hidden = true;
            document.getElementById("previewAlias").hidden = true;
            document.getElementById("previewPhone").hidden = true;
            document.getElementById("previewAddress").hidden = true;
            document.getElementById("previewEmail").hidden = true;
            document.getElementById("previewEvent").hidden = true;

            document.getElementById("eventInfo").hidden = true;
            //var casenumber = document.getElementById("casenumberInput");
            //casenumber.addEventListener("click", casenumber.innerText = "", false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },

        saveProgress: function () {
            document.getElementById("newProfilePreview").hidden = false;

            document.getElementById("previewPhoto").style.backgroundImage = document.getElementById("photo").style.backgroundImage;

            if (document.getElementById("casenumberInput").value == "Case Number")
                document.getElementById("previewCasenumber").innerHTML = "<h4>Case Number: None Selected</h4>";
            else
                document.getElementById("previewCasenumber").innerHTML = "<h4>Case Number: " + document.getElementById("casenumberInput").value + "</h4>";

            if (document.getElementById("raceValue").value == "- Race -")
                document.getElementById("previewRace").innerHTML = "<h4>Race: None Selected</h4>";
            else
                document.getElementById("previewRace").innerHTML = "<h4>Race: " + document.getElementById("raceValue").value + "</h4>";

            var radios = document.getElementById("sexInput").elements;
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    document.getElementById("previewSex").innerHTML = "<h4>Sex: " + radios[i].value + "</h4>";
                    break;
                }
                else if (!radios[i].checked && i == 3)
                    document.getElementById("previewSex").innerHTML = "<h4>Sex: None Selected</h4>";
            }

            if (document.getElementById("DOBDay").value == "- Day -" || document.getElementById("DOBMonth").value == "- Month -" || document.getElementById("DOBYear").value == "- Year -")
                document.getElementById("previewDOB").innerHTML = "<h4>DOB: None Selected</h4>";
            else {
                document.getElementById("previewDOB").innerHTML = "<h4>DOB: " + document.getElementById("DOBDay").value + " " + document.getElementById("DOBMonth").value
                + " " + document.getElementById("DOBYear").value + "</h4>";
            }

            if (document.getElementById("pobInput").value == "Place of Birth")
                document.getElementById("previewPOB").innerHTML = "<h4>Place of Birth: None Selected</h4>";
            else
                document.getElementById("previewPOB").innerHTML = "<h4>Place of Birth: " + document.getElementById("pobInput").value + "</h4>";

            if (document.getElementById("foot").value == "- Foot -" || document.getElementById("inch").value == "- Inches -")
                document.getElementById("previewHeight").innerHTML = "<h4>Height: None Selected</h4>";
            else
                document.getElementById("previewHeight").innerHTML = "<h4>Height: " + document.getElementById("foot").value + "' " + document.getElementById("inch").value + "</h4>";

            if (document.getElementById("weightInput").value == "Weight")
                document.getElementById("previewWeight").innerHTML = "<h4>Weight: None Selected</h4>";
            else
                document.getElementById("previewWeight").innerHTML = "<h4>Weight: " + document.getElementById("weightInput").value + "</h4>";

            if (document.getElementById("eyeInput").value == "- Eye Color -")
                document.getElementById("previewEye").innerHTML = "<h4>Eye Color: None Selected</h4>";
            else
                document.getElementById("previewEye").innerHTML = "<h4>Eye Color: " + document.getElementById("eyeInput").value + "</h4>";

            if (document.getElementById("hairInput").value == "- Hair Color -")
                document.getElementById("previewHair").innerHTML = "<h4>Hair Color: None Selected</h4>";
            else
                document.getElementById("previewHair").innerHTML = "<h4>Hair Color: " + document.getElementById("hairInput").value + "</h4>";

            if (document.getElementById("skinInput").value == "- Skin Tone -")
                document.getElementById("previewSkin").innerHTML = "<h4>Skin Tone: None Selected</h4>";
            else
                document.getElementById("previewSkin").innerHTML = "<h4>Skin Tone: " + document.getElementById("skinInput").value + "</h4>";

            if (!document.getElementById("newInput").hidden && document.getElementById("newInput").value != "") {
                switch (document.getElementById("newInput").className) {
                    case "location":
                        {
                            document.getElementById("previewLocation").hidden = false;
                            var temp = document.createElement("option");
                            temp.text = document.getElementById("newInput").value;
                            document.getElementById("locationList").add(temp);
                            break;
                        }
                    case "alias":
                        {
                            document.getElementById("previewAlias").hidden = false;
                            var temp = document.createElement("option");
                            temp.text = document.getElementById("newInput").value;
                            document.getElementById("aliasList").add(temp);
                            break;
                        }
                    case "phone":
                        {
                            document.getElementById("previewPhone").hidden = false;
                            var temp = document.createElement("option");
                            temp.text = document.getElementById("newInput").value;
                            document.getElementById("phoneList").add(temp);
                            break;
                        }
                    case "address":
                        {
                            document.getElementById("previewAddress").hidden = false;
                            var temp = document.createElement("option");
                            temp.text = document.getElementById("newInput").value;
                            document.getElementById("addressList").add(temp);
                            break;
                        }
                    case "email":
                        {
                            document.getElementById("previewEmail").hidden = false;
                            var temp = document.createElement("option");
                            temp.text = document.getElementById("newInput").value;
                            document.getElementById("emailList").add(temp);
                            break;
                        }
                    //case "event":
                    //    {
                    //        document.getElementById("previewEvent").hidden = false;
                    //        var temp = document.createElement("option");
                    //        temp.text = document.getElementById("newInput").value;
                    //        document.getElementById("eventList").add(temp);
                    //        break;
                    //    }
                    default:
                        break;
                }
            }

            else if (document.getElementById("newInput").hidden && !document.getElementById("eventInfo").hidden)
            {
                var year = document.getElementById("eventYear").value;
                var month = document.getElementById("eventMonth").value;
                var day = document.getElementById("eventDay").value;
                var hour = document.getElementById("eventHour").value;
                var minute = document.getElementById("eventMinute").value;

                switch(month)
                {
                    case "January":
                        {
                            month = 1;
                            break;
                        }
                    case "February":
                        {
                            month = 2;
                            break;
                        }
                    case "March":
                        {
                            month = 3;
                            break;
                        }
                    case "April":
                        {
                            month = 4;
                            break;
                        }
                    case "May":
                        {
                            month = 5;
                            break;
                        }
                    case "June":
                        {
                            month = 6;
                            break;
                        }
                    case "July":
                        {
                            month = 7;
                            break;
                        }
                    case "August":
                        {
                            month = 8;
                            break;
                        }
                    case "September":
                        {
                            month = 9;
                            break;
                        }
                    case "October":
                        {
                            month = 10;
                            break;
                        }
                    case "November":
                        {
                            month = 11;
                            break;
                        }
                    default:
                        {
                            month = 12;
                            break;
                        }
                }

                var event = {
                    date: new Date(year, month, day, hour, minute, 0, 0),
                    type: document.getElementById("typeList").value,
                    value: document.getElementById("eventValue").value,
                    toValue: document.getElementById("eventToValue").value
                };

                document.getElementById("previewEvent").hidden = false;
                var temp = document.createElement("option");
                temp.text = event.type + " to " + event.toValue;
                document.getElementById("eventList").add(temp);

                tempEvents[(tempEvents.length + 1)] = event;        
            }

            document.getElementById("addAlias").disabled = false;
            document.getElementById("addLocation").disabled = false;
            document.getElementById("addPhone").disabled = false;
            document.getElementById("addAddress").disabled = false;
            document.getElementById("addEmail").disabled = false;
            document.getElementById("addEvent").disabled = false;
            document.getElementById("finish").disabled = false;            

            document.getElementById("newInput").value = "Enter Here";
            document.getElementById("newInput").hidden = true;
            document.getElementById("eventInfo").hidden = true;
        },

        newLocation: function () {
            document.getElementById("addAlias").disabled = "disabled";
            document.getElementById("addLocation").disabled = "disabled";
            document.getElementById("addPhone").disabled = "disabled";
            document.getElementById("addAddress").disabled = "disabled";
            document.getElementById("addEmail").disabled = "disabled";
            document.getElementById("addEvent").disabled = "disabled";
            document.getElementById("finish").disabled = "disabled";

            document.getElementById("newInput").hidden = false;
            document.getElementById("newInput").className = "location";
        },


        newAlias: function () {
            document.getElementById("addAlias").disabled = "disabled";
            document.getElementById("addLocation").disabled = "disabled";
            document.getElementById("addPhone").disabled = "disabled";
            document.getElementById("addAddress").disabled = "disabled";
            document.getElementById("addEmail").disabled = "disabled";
            document.getElementById("addEvent").disabled = "disabled";
            document.getElementById("finish").disabled = "disabled";

            document.getElementById("newInput").hidden = false;
            document.getElementById("newInput").className = "alias";
        },

        newPhone: function () {
            document.getElementById("addAlias").disabled = "disabled";
            document.getElementById("addLocation").disabled = "disabled";
            document.getElementById("addPhone").disabled = "disabled";
            document.getElementById("addAddress").disabled = "disabled";
            document.getElementById("addEmail").disabled = "disabled";
            document.getElementById("addEvent").disabled = "disabled";
            document.getElementById("finish").disabled = "disabled";

            document.getElementById("newInput").hidden = false;
            document.getElementById("newInput").className = "phone";
        },

        newAddress: function () {
            document.getElementById("addAlias").disabled = "disabled";
            document.getElementById("addLocation").disabled = "disabled";
            document.getElementById("addPhone").disabled = "disabled";
            document.getElementById("addAddress").disabled = "disabled";
            document.getElementById("addEmail").disabled = "disabled";
            document.getElementById("addEvent").disabled = "disabled";
            document.getElementById("finish").disabled = "disabled";

            document.getElementById("newInput").hidden = false;
            document.getElementById("newInput").className = "address";
        },

        newEmail: function () {
            document.getElementById("addAlias").disabled = "disabled";
            document.getElementById("addLocation").disabled = "disabled";
            document.getElementById("addPhone").disabled = "disabled";
            document.getElementById("addAddress").disabled = "disabled";
            document.getElementById("addEmail").disabled = "disabled";
            document.getElementById("addEvent").disabled = "disabled";
            document.getElementById("finish").disabled = "disabled";

            document.getElementById("newInput").hidden = false;
            document.getElementById("newInput").className = "email";
        },

        newEvent: function () {
            document.getElementById("addAlias").disabled = "disabled";
            document.getElementById("addLocation").disabled = "disabled";
            document.getElementById("addPhone").disabled = "disabled";
            document.getElementById("addAddress").disabled = "disabled";
            document.getElementById("addEmail").disabled = "disabled";
            document.getElementById("addEvent").disabled = "disabled";
            document.getElementById("finish").disabled = "disabled";

            document.getElementById("eventInfo").hidden = false;            
        },

        newPhoto: function () {
            //console.log("zophie");
            //if (this.files && this.files[0]) {
            //    var FR = new FileReader();
            //    FR.onload = function (e) {
            //        el("photo").style.backgroundImage = "'url(" + e.target.result + "')";
            //        el("photo").innerHTML = e.target.result;
            //    };
            //    FR.readAsDataURL(this.files[0]);
            //}

            var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
            openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
            openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
            openPicker.fileTypeFilter.replaceAll([".png", ".jpg", ".jpeg"]);

            openPicker.pickSingleFileAsync().then(function (file) {
                document.getElementById("photo").style.backgroundImage = "url('" + file.path + "')";
                document.getElementById("previewPhoto").style.backgroundImage = "url('" + file.path + "')";
                document.getElementById("photo").style.opacity = "1";
                console.log("url(" + file.path + ")");
                
            });

            //var filePicker = new Windows.Storage.Pickers.FileOpenPicker();
            //var photo;

            //filePicker.fileTypeFilter.replaceAll(["*"]);

            //filePicker.pickSingleFileAsync().then(function (file) {
            //    if (!file) {
            //        console.log("No file selected");
            //        return;
            //    }

            //    var fileReader = new FileReader();                


            //    /*NEED TO FIX THIS TO ADD PHOTO TO BACKGROUND*/
            //    document.getElementById("photo").style.backgroundImage = "url('" + fileReader.readAsDataURL(file) + "')";

            //    document.getElementById("photo").style.backgroundColor = "white";

            //    //document.getElementById("photo").style.backgroundImage = "url('../../images/logo.scale-100.png')";
            //});
        },
        
        submitProgress: function () {
            var person = {
                casenumber: document.getElementById("casenumberInput").innerText,
                locations: [],
                aliases: [],
                phoneNumbers: [],
                addresses: [],
                emailAddresses: [],
                events: [],
                photo: document.getElementById("previewPhoto").innerText,
                sex: document.getElementById("sexInput").value,
                race: document.getElementById("raceValue").value,
                dateOfBirth: document.getElementById("DOBMonth").value + document.getElementById("DOBDay").value + ", " + document.getElementById("DOBYear").value,
                placeOfBirth: document.getElementById("previewPOB").innerText,
                height: document.getElementById("foot").value + "' " + document.getElementById("inch").value + "\"",
                weight: document.getElementById("weightInput").innerText,
                eyeColor: document.getElementById("eyeInput").value,
                hairColor: document.getElementById("hairInput").value,
                skinTone: document.getElementById("skinInput").value
            };


            for(var i = 0; i < (document.getElementById("locationList").length-1); i++)
                person.locations[i] = document.getElementById("locationList")[(i+1)].value;
            for (var i = 0; i < (document.getElementById("aliasList").length-1); i++)
                person.aliases[i] = document.getElementById("aliasList")[(i + 1)].value;
            for (var i = 0; i < (document.getElementById("phoneList").length-1); i++)
                person.phoneNumbers[i] = document.getElementById("phoneList")[(i + 1)].value;
            for (var i = 0; i < (document.getElementById("addressList").length-1); i++)
                person.addresses[i] = document.getElementById("addressList")[(i + 1)].value;
            for (var i = 0; i < (document.getElementById("emailList").length-1); i++)
                person.emailAddresses[i] = document.getElementById("emailList")[(i + 1)].value;
            for (var i = 0; i < (tempEvents.length-1); i++) {
                person.events[i] = tempEvents[(i+1)];
            }
            var personJSON = JSON.stringify(person);

            WinJS.xhr({
                type: "POST",
                url: "http://10.201.31.113:8090/VirtualCaseWall/api/person",
                headers: { "X-Auth-Header": WinJS.Application.sessionState.securityToken }, //this I don't think is even there brah
                responseType: "String",
                data: personJSON
            }).done(function (result) {
                console.log(personJSON);
                console.log(result);
            });
        }
    });
})();
