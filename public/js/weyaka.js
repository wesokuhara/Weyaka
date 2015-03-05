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

	/* add active class to navbar digest links */
	$(window).scroll( function() {
		var scrollPosition = $(window).scrollTop();

		$('.digest-link-icons ul li').each( function() {
			var currentListElement = $(this);
			var refElement = $(currentListElement.children().attr("href"));

			if (refElement.position().top <= scrollPosition &&
				refElement.position().top + refElement.height() > scrollPosition) {

				//remove active class from all list items
				$('.digest-link ul li').removeClass('active');
				currentListElement.addClass('active');
			}

			else {
				currentListElement.removeClass('active');
			}
		});
	});

	//Delete a note
	$('.note-delete').click(function (e) {
		//extract the ID Number
		var noteID = $(this).closest('.note').attr('id');
		var idNumber = noteID.substr('note'.length);
		console.log(idNumber);

		$.post('/deleteNote/'+idNumber);
	});
});