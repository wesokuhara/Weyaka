/**
 * digest.js
 * Controller class to render the full digest page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

 //Load JSON data
var events = require('../events.json');


exports.view = function(req, res) {
	console.log("# Loading digest page...");
	
	res.render('digest', events);
};