var map;
var dataResults;

function initialize() {
    map = new google.maps.Map(document.getElementById('mapdisplay'), {
        zoom: 3,
        center: new google.maps.LatLng(40, -187.3),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });
}

eqfeed_callback = function (results) {
    dataResults = results;
}

google.maps.event.addDomListener(window, 'load', initialize);