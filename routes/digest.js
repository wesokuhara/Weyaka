/**
 * digest.js
 * Controller class to render the full digest page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

var data = require('../data.json');

exports.view = function(req, res) {
	console.log("# Loading digest page...");
	console.log(data);
	
	res.render('digest', data);
};