/**
 * home.js
 * Controller class to render the home page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

// Load JSON data
var events = require('../events.json'); 

exports.view = function(req, res) {
	console.log("# Loading home page...");
	

	var random_num = Math.random();

  if(random_num > 0.5){
    res.render("home", events);
  }

  else{
    res.render("home_alternate", events)
  }

	//res.render('home', events); //pass data into the home page
};