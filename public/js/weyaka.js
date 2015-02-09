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