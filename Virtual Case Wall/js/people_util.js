var applicationData = Windows.Storage.ApplicationData.current;
var localFolder = applicationData.localFolder;

// write data to a file, this will write the Grails JSON response
function writePeople(json) {
    //console.log("writePeople");
    localFolder.createFileAsync("people.txt", Windows.Storage.CreationCollisionOption.replaceExisting)
       .then(function (peopleFile) {
           return Windows.Storage.FileIO.writeTextAsync(peopleFile, JSON.stringify(json));
       }).done(function () {
           //console.log("donewriting");
       });
}

//responsible for reading the file and passing the person object to the callback function
function readPersonFromPeopleFile(personName, personAction) {
    //console.log("readPeople");
    localFolder.getFileAsync("people.txt")
       .then(function (sampleFile) {
           return Windows.Storage.FileIO.readTextAsync(sampleFile);
       }).done(function (json) {
           var personObject = {
               casenumber: "",
               locations: [],
               aliases: [],
               phoneNumbers: [],
               addresses: [],
               emailAddresses: [],
               events: [],
               photo: ""
           };
           json = JSON.parse(json);
           for (var i = 0; i < json.length; i++) {

               //found person you want
               if (personName == json[i].person.caseNumber) {
                   personObject.casenumber = json[i].person.caseNumber;
                   personObject.photo = json[i].person.photo;

                   for (var p = 0; p < json[i].person.locations.length; p++) {
                       personObject.locations[p] = json[i].person.locations[p];
                   }
                   for (var p = 0; p < json[i].person.aliases.length; p++) {
                       personObject.aliases[p] = json[i].person.aliases[p];
                   }
                   for (var p = 0; p < json[i].person.phoneNumbers.length; p++) {
                       personObject.phoneNumbers[p] = json[i].person.phoneNumbers[p];
                   }
                   for (var p = 0; p < json[i].person.addresses.length; p++) {
                       personObject.addresses[p] = json[i].person.addresses[p];
                   }
                   for (var p = 0; p < json[i].person.emailAddresses.length; p++) {
                       personObject.emailAddresses[p] = json[i].person.emailAddresses[p];
                   }
                   for (var p = 0; p < json[i].person.events.length; p++) {
                       var event = {
                           date: json[i].person.events[p].date,
                           type: json[i].person.events[p].type,
                           value: json[i].person.events[p].value,
                           toValue: json[i].person.events[p].toValue
                       };
                       personObject.events[p] = event;
                   }
               }
           }
           personAction(personObject);
       }, function () {
           console.log("file could not found");
       });
}

function doPersonAction(person) {
    //person here is an actual person object that we wanted
    console.log("Here is our person   " + JSON.stringify(person));
}