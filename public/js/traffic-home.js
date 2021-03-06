/**
 * traffic-home.js
 * 
 * JS file to display route eta on the homescreen
 *
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

 /* When the page loads, get the weather */
$(document).ready(function() {
  if (!("geolocation" in navigator)) {
    /* geolocation IS NOT available */
    $("#traffic-home").html("<p class='noLocationError'>No geolocation.</p>");
  }

  var geo_options = {
	  enableHighAccuracy: true,
	  timeout           : 20000
	};

  //Try to get the weather
  navigator.geolocation.watchPosition(function(position) {
    loadETA(position.coords.latitude, position.coords.longitude); //load weather using your lat/lng coordinates
  },
  //if geolocation is disabled, notify user
  function (error) {
	console.log(error);
    if (error.code == error.PERMISSION_DENIED) {
      $("#traffic-home").html("<span class='glyphicon glyphicon-ban-circle'></span><p>Location Service<br>Disabled</p>");
    }
    else if (error.code == error.TIMEOUT) {
    	$("#traffic-home").html("<span class='glyphicon glyphicon-warning-sign'></span><p>Location Timeout</p>");
    }
    else {
	  $("#traffic-home").html("<span class='glyphicon glyphicon-warning-sign'></span><p>Location Error</p>");
    }
  }, geo_options);
});

function loadETA(lat, lng) {

	var pos = new google.maps.LatLng(lat, lng);
	var directionsService = new google.maps.DirectionsService();
	var geocoder = new google.maps.Geocoder();

	var address = "UCSD";

	geocoder.geocode( {'address': address}, function (results, status1) {
		if (status1 == google.maps.GeocoderStatus.OK) {

			//get start (current location) and end (inputted address) locations
			var start = pos;
			var end = results[0].geometry.location;

			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.DRIVING,
				durationInTraffic: true
			};

			//display the directions on the map
			directionsService.route(request, function (response, status2) {
				if (status2 == google.maps.DirectionsStatus.OK) {
					//get ETA
					var ETA = response.routes[0].legs[0].duration.text;

					$("#traffic-home").html('<h4>To ' + address + "</h4><h2>ETA<br>" + ETA + "</h2>");
				}
			});
		}
		else {
			alert('Please enter a valid address');
		}
	});
}