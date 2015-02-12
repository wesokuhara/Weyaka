/**
 * traffic.js
 * 
 * JS file to intialize the map
 *
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

/* Initialize Google Maps API */
function initMap() {
	console.log("Initilizing map...");
	//set map options
	var mapOptions = {
		zoom: 14,
		zoomControl: false, //no zoom buttons
		panControl: false //no pan buttons
	};

	//initialize the map
	var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			var infoWindow = new google.maps.InfoWindow( {
				map: map,
				position: pos,
				content: 'You are here!'
			});

			map.setCenter(pos);
		}, function() {
			handleNoGeolocation(true);
		});
	}
	else {
		//Browser doesn't support geolocation
		handlleNoGeolocation(false);
	}

	//add traffic layer to map
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);
}

/** Handle the case of no geolocation */
function handleNoGeolocation(errorFlag) {
	if (errorFlag) {
		var content = 'Error: The Geolocation serivce failed.';
	}
	else {
		var content = 'Error: Your browser does not support geolocation.';
	}
	console.log(content);

	var options = {
		map: map,
		position: new google.maps.LatLng(32.88006, -117.234013),
		content: content
	};

	var infoWindow = new google.maps.InfoWindow(options);
	map.setCenter(options.position);
}

//map will load when the page loads
google.maps.event.addDomListener(window, 'load', initMap);