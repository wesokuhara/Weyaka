'use strict';

/**
 * weyaka.js
 * JS file for the app
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

/* Function to hide the navbar dropdown
 * when a link in the dropdown is clicked
 */
$('.nav a').on('click', function(){
 	if ($('.navbar-toggle').css('display') != 'none'){
    	$('.navbar-collapse').collapse('hide');
    }
});

/* When links in the navbar on the digest page take you to the
 * digest page, scroll to the section 
 */
$('.digest-link a').click(function(event) {
	event.preventDefault(); //do not perform href action

	$('html, body').scrollTo(this.hash, this.hash);
	$(this).hover(false);
});



/*
$(document).ready(function() {
	$('#traffic').hover(function() {
		$('#traffic-link').addClass('active');
	}, function() {
		$('#traffic-link').removeClass('active');
	});

	$('#weather').hover(function() {
		$('#weather-link').addClass('active');
	}, function() {
		$('#weather-link').removeClass('active');
	});

	$('#notes').hover(function() {
		$('#notes-link').addClass('active');
	}, function() {
		$('#notes-link').removeClass('active');
	});

	$('#schedule').hover(function() {
		$('#schedule-link').addClass('active');
	}, function() {
		$('#schedule-link').removeClass('active');
	});
});
*/