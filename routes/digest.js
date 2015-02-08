/**
 * digest.js
 * Controller class to render the full digest page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

exports.view = function(req, res) {
	console.log("# Loading digest page...");
	
	res.render('digest');
};