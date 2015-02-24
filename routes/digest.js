/**
 * digest.js
 * Controller class to render the full digest page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

 //Load JSON data
var data = require('../data.json');
var events = require('../events.json');


exports.view = function(req, res) {
	console.log("# Loading digest page...");
	
	res.render('digest', events);
};





exports.schedule= function(req, res) {

	console.log(req.query);


  var jsonobject ={
	"title": req.query.title,
	"location": req.query.location,
	"date": req.query.Date,
	"time": req.query.time
}

	events["events"].push(jsonobject);
	res.render('digest', events);

};