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


	/** Adding a note... */
	$('#submit-note-button').click(function (e) {
        //get all form data
        var title = $('#add-note-form #title-field').val();
        var details = $('#add-note-form #details-field').val();

        if (title == "") {
            return;
        }

        var json = {
            'title': title,
            'details': details
        };
        
        console.log("submitting new note...");

        $.get('/addNote', json);
    });


    /** Adding an event... */
    $('#submit-event-button').click(function (e) {
    	//get all form data
        var title = $('#add-event-form #title-field').val();
        var date = $('#add-event-form #date-field').val();
        var time = $('#add-event-form #time-field').val();
        var location = $('#add-event-form #location-field').val();

        if (title == "") {
            return;
        }

        //format the date
    	var dateArray = date.split("-");
		var year = dateArray[0];
		var month = dateArray[1];
		var day = dateArray[2];
		date = month.concat("/", day, "/", year);

        var json = {
            'title': title,
            'date': date,
            'time': time,
            'location': location
        };

        console.log("submitting new event...");

        $.get('/addEvent', json);
    });
});