'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
tracking_traffic();
}
function tracking_traffic()
  console.log("this thing clicked");
  	woopra.track("alternate_home_dropmenu_click");
  	    //add your Woopra tracking code for version A's like button click event
 
}