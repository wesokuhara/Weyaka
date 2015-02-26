'use strict';

/**
 * weyaka.js
 * JS file for the app
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

$(document).ready( function() {

	/* When a digest link is clicked scroll to the section */
	$('.digest-link').click( function (event) {

		event.preventDefault();

		$('html, body').scrollTo(this.hash, this.hash);
	});

	/* Function to confirm with the user they want to logout
	 */
	$('#logout-button').click( function() {
		return confirm('Are you sure you want to logout?');
	});
});