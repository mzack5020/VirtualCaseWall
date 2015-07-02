var map;
var dataResults;
var marker;
var overlay;

addPersonOverlay.prototype = new google.maps.OverlayView();

function initialize() {
  //  personLat = 39;
  // personLng = -77;

    // Booz Allen locations (testing)
   
    allLats = [38.95, 38.92, 38.89, 38.90];
    allLngs = [-77.40, -77.23, -77.01, -77.033];

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

    console.log(meanLat);
    console.log(meanLng);
    map = new google.maps.Map(document.getElementById('mapdisplay'), {
        zoom: 13,
        center: new google.maps.LatLng(meanLat, meanLng),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    for (var i = 0; i < allLats.length; i++) {
        new google.maps.Marker({ position: { lat: allLats[i], lng: allLngs[i] }, map: map });

    }

    // Create image overlay on map -- 'Add a person of interest' 

    var bottomLeft = new google.maps.LatLng(62.281819, -150.287132);
    var topRight = new google.maps.LatLng(62.400471, -150.005608);

    var bounds = new google.maps.LatLngBounds(bottomLeft, topRight);

    var srcImage = "https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/256/add-user.png"

   // Define overlay //
}

eqfeed_callback = function (results) {
    dataResults = results;
}

google.maps.event.addDomListener(window, 'load', initialize);