/**
 * help.js
 * Controller class to render the help page.
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

 //Load JSON data
exports.view = function(req, res) {
	console.log("# Loading help page...");
	
	res.render('help');
};