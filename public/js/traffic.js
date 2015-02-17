/**
 * traffic.js
 * 
 * JS file to intialize the map
 *
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

/* Check geolocation is enabled first */
function checkGeolocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    initMap(position.coords.latitude, position.coords.longitude); //load traffic using your lat/lng coordinates
  },
  //if geolocation is disabled, notify user
  function (error) {
    if (error.code == error.PERMISSION_DENIED) {
      $("#googleMap").html("<p class='noLocationError'>Please enable your browser geolocation service to use this feature.</p>");
    }
  });
}

/* Initialize Google Maps API */
function initMap(lat, lng) {
	console.log("Initilizing map...");
	//set map options
	var mapOptions = {
		zoom: 14,
		zoomControl: false, //no zoom buttons
		panControl: false //no pan buttons
	};

	//initialize the map
	var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

	var pos = new google.maps.LatLng(lat, lng);
	var infoWindow = new google.maps.InfoWindow( {
		map: map,
		position: pos,
		content: 'You are here!'
	});

	map.setCenter(pos);

	//add traffic layer to map
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);

	//add the locate button
	$("#map-locate-btn").html('<button type="button" class="btn btn-inverse">Locate me!</button>');
}

//map will load when the page loads
google.maps.event.addDomListener(window, 'load', checkGeolocation);