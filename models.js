// Schemas for MongoDB go here 

var Mongoose = require('mongoose');

var NoteSchema = new Mongoose.Schema({
	//key : value pairs
	"title": String,
	"details": String
});

//create the note schema in Mongoose
exports.Note = mongoose.model('Note', NoteSchema);




var EventSchema = new Mongoose.Schema({
	//key : value pairs
	"title": String,
	"location": String,
	"date": String,
	"time": String
});

exports.Event = mongoose.model('Event', EventSchema);