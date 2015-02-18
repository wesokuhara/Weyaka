'use strict';

/**
 * weyaka.js
 * JS file for the app
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

$(document).ready( function() {

	/* When a digest link is clicked, collapse the navbar dropdown
	 * if it is open and then scroll to that section of the page
	 */
	$('.digest-link').click( function (event) {

		if ($('.navbar-toggle').css('display') != 'none'){
	    	$('.navbar-collapse').collapse('hide');
	    }

		event.preventDefault();
		$('html, body').scrollTo(this.hash, this.hash);
	});

	/* Function to confirm with the user they want to logout
	 */
	$('.logout-button').click( function() {
		return confirm('Are you sure you want to logout?');
	});
});