var map;
var dataResults;
var marker;
console.log("map.js");
function initialize() {
  //  personLat = 39;
  // personLng = -77;

    allLats = [39, 55, 45, 32, 88];
    allLngs = [-77, 45, -100, 45, 30];

    latSum = 0;
    lngSum = 0;
    meanLat = 0;
    meanLng = 0;

    for (var i = 0; i < allLats.length; i++)
    {
        latSum += allLats[i];
        lngSum += allLngs[i];
    }

    meanLat = latSum / allLats.length;
    meanLng = lngSum / allLngs.length;

    map = new google.maps.Map(document.getElementById('mapdisplay'), {
        zoom: 3,
        center: new google.maps.LatLng(meanLat, meanLng),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    for (var i = 0; i < allLats.length; i++) {
        new google.maps.Marker({ position: { lat: allLats[i], lng: allLngs[i] }, map: map });

    }

 
   // new google.maps.Marker({ position: { lat: personLat, lng: personLng }, map: map });
}

eqfeed_callback = function (results) {
    dataResults = results;
}

google.maps.event.addDomListener(window, 'load', initialize);