'use strict';

/**
 * weyaka.js
 * JS file for the app
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

$(document).ready( function() {

	/* Function to hide the navbar dropdown
	 * when dropdown is open and the user clicks outside the dropdown
	 */
	$(document).click(function() {
		//if dropdown is displayed, collapse it
	 	if ($('.navbar-toggle').css('display') != 'none'){
	    	$('.navbar-collapse').collapse('hide');
	    }
    });

	/* Function to collapse the dropdown menu
	 * if it is open and a link is clicked
	 * 
	 * Function also scrolls to specified section of page
	 * when user is on the digest page and a link in the navbar
	 * dropdown is clicked
	 */
	$('.digest-link a').click(function (event) {
		//collapse dropdown if open
		if ($('.navbar-toggle').css('display') != 'none'){
	    	$('.navbar-collapse').collapse('hide');
	    }

		//do not perform href action and scroll to id
		event.preventDefault();
		$('html, body').scrollTo(this.hash, this.hash);
	});

	/* Function to confirm with the user they want to logout
	 */
	$('.logout-button').click( function() {
		return confirm('Logout?');
	});
});