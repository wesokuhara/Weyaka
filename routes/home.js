/**
 * home.js
 * Controller class to render the home page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

// Load JSON data
var data = require('../data.json'); 

exports.view = function(req, res) {
	console.log("# Loading home page...");
	console.log(data);

	res.render('home', data); //pass data into the home page
};