/**
 * traffic.js
 * 
 * JS file to intialize the map
 *
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */
var map;
var pos;
var trafficLayer = new google.maps.TrafficLayer();
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();;
var geocoder = new google.maps.Geocoder();;

/* Check geolocation is enabled first */
function checkGeolocation() {
 	navigator.geolocation.getCurrentPosition(function(position) {
    	initMap(position.coords.latitude, position.coords.longitude); //load traffic using your lat/lng coordinates
  	},
  	//if geolocation is disabled, notify user
  	function (error) {
      	$("#googleMap").html("<p class='noLocationError'>Please enable your browser geolocation service to use this feature.</p>");
  	});
}

/* Initialize the map */
function initMap(lat, lng) {
	console.log("Initilizing map...");

	//define map options
	var mapOptions = {
		zoom: 16,
		zoomControl: false, //no zoom buttons
		panControl: false, //no pan buttons
		streetViewControl: false //no street view option
	};

	//create the map
	map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

	//find user's position
	pos = new google.maps.LatLng(lat, lng);
	var marker = new google.maps.Marker( {
		map: map,
		position: pos,
		title: 'You are here!'
	});

	//center the map on that position
	map.setCenter(pos);

	//add traffic layer to map
	trafficLayer.setMap(map);

	//add the locate button
	//$("#map-locate-btn").html('<button type="button" class="btn btn-inverse" onclick="checkGeolocation()">Locate me!</button>');

	//add address lookup input field
	$("#address-input").html('<input id="address" type="text" class="form-control" placeholder="Enter Destination">');

	//add geocode button
	$("#geocode-btn").html('<button type="button" class="btn btn-inverse" onclick="codeAddress()"><span class="fui-search"></span></button>');
}

function codeAddress() {
	//get the inputted address
	var address = document.getElementById('address').value;

	geocoder.geocode( {'address': address}, function (results, status1) {
		if (status1 == google.maps.GeocoderStatus.OK) {

			directionsDisplay.setMap(map);

			//get start (current location) and end (inputted address) locations
			var start = pos;
			var end = results[0].geometry.location;

			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.DRIVING
			};

			//display the directions on the map
			directionsService.route(request, function (response, status2) {
				if (status2 == google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(response);
				}
			});
		}
		else {
			alert('Please enter a valid address');
		}
	});
}

//Check geolcation when the page loads
google.maps.event.addDomListener(window, 'load', checkGeolocation);