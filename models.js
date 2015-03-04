// Schemas for MongoDB go here 

var Mongoose = require('mongoose');

var NoteSchema = new Mongoose.Schema({
	//key : value pairs
	"title": String,
	"details": String
});

//create the note schema in Mongoose
exports.Note = Mongoose.model('Note', NoteSchema);




var EventSchema = new Mongoose.Schema({
	//key : value pairs
	"title": String,
	"location": String,
	"date": String,
	"time": String
});

exports.Event = Mongoose.model('Event', EventSchema);