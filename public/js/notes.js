$(document).ready(function() {
    
    $('#submit-note-button').click(function (e) {
        console.log("submitting new note...");

        var title = $('#add-note-form #title-field').val();
        var details = $('#add-note-form #details-field').val();

        if (title == "") {
            return;
        }

        var json = {
            'title': title,
            'details': details
        };

        $.get('/addNote', json);
    });

    $('#submit-event-button').click(function (e) {
        console.log("submitting new event...");

        var title = $('#add-event-form #title-field').val();
        var date = $('#add-event-form #date-field').val();
        var time = $('#add-event-form #time-field').val();
        var location = $('#add-event-form #location-field').val();

        if (title == "") {
            return;
        }

        var json = {
            'title': title,
            'date': date,
            'time': time,
            'location': location
        };

        $.get('/addEvent', json);
    });

});