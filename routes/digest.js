/**
 * digest.js
 * Controller class to render the full digest page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

 //Load JSON data
var events = require('../events.json');
var models = require("../models");


exports.view = function(req, res) {
	console.log("# Loading digest page...");
	
	//find the events from the database
	models.Event.find()
		.exec(displayEvents);

	function displayEvents (err, events) {
		//find the notes from the database
		models.Note.find(function (err, notes) {
			res.render('digest', {'events': events, "notes": notes});
		});
	}
};





exports.googlecall = function(req, res)
{
res.render('/digest', events);
}


exports.addNote = function(req, res) {
	console.log("adding note...");
	var noteData = req.query;

	var newNote = new models.Note({
		"title": noteData.title,
		"details": noteData.details
	});

	newNote.save(afterSaving);

	function afterSaving(err) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		res.redirect("digest");
	}

	/*
	var json = {
		"title": noteData.title,
		"details": noteData.details
	}
	events["notes"].push(json);
	events['notecount'] = events['notecount']+1;

	res.render("digest", events);
	*/
};

exports.addEvent = function(req, res) {
	console.log("adding event...");
	var eventData = req.query;

	var newEvent = new models.Event({
		"title": eventData.title,
		"date": eventData.date,
		"time": eventData.time,
		"location": eventData.location
	});

	console.log(newEvent);

	newEvent.save(afterSaving);

	function afterSaving(err) {
		if (err) {
			console.log(err);
			res.send(500);			
		}
		res.redirect("digest#schedule");
	}
/*
	var json = {
		"title": eventData.title,
		"date": eventData.date,
		"time": eventData.time,
		"location": eventData.location
	}

	events["events"].push(json);
	events['eventcount'] = events['eventcount']+1;

	//increment the count to display on the homescreen
	events['additionalEvents'] = events['additionalEvents']+1;

	res.render("digest", events);
	*/
}