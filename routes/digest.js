/**
 * digest.js
 * Controller class to render the full digest page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

 //Load JSON data
var events = require('../events.json');


// This should work both there and elsewhere.
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}


exports.view = function(req, res) {
	console.log("# Loading digest page...");
	
		if(isEmpty(res.query))
			{

				console.log("hw");

				res.render('digest',events);
			}
		else
		{

			var tokenurl = "https://accounts.google.com/o/oauth2/token?"+
			"code="+res.query.code+
			"&redirect_uri="+"http://localhost:3000/digest"+
			"&client_id="+"897711787704-7qrcp98444ftfkuo21qfkshq1c0eth61.apps.googleusercontent.com"+
			"&client_secret="+"ySwANfpLuaLhHxOHkpUwp5h-"+
			"&grant_type=authorization_code";


			$.post(tokenurl,tokencallback);

			console.log(tokenurl);


			function tokencallback(result)
			{
				//console.log(result);

				console.log("boooooooo");
			}

		}
	
	res.render('digest', events);
};





exports.googlecall = function(req, res)
{
res.render('/digest', events);
}




exports.schedule= function(req, res) {

console.log(req.query);

/**creating object to put into events.json*/
  var jsonobject ={
	"title": req.query.title,
	"location": req.query.location,
	"date": req.query.date,
	"time": req.query.time
}
	
		
	events["events"].push(jsonobject);
    events['eventcount'] =events['eventcount']+1;	
	

	for(var i = 0; i< events['events'].length; i++)	
	{
	for(var j = 0; j < events['events'].length-1;j++)
	{
		if(events['events'][j]['time']<events['events'][j+1]['time'])
		{
			var temp = ['events'][j];
			['events'][j]= ['events'][j+1];
			['events'][j+1]=temp;
			console.log("seitched");
		}
	}
}



	res.render('digest', events);

};

exports.addNote = function(req, res) {
	console.log("adding note...");
	var noteData = req.query;

	var json = {
		"title": noteData.title,
		"details": noteData.details
	}

	events["notes"].push(json);
	events['notecount'] = events['notecount']+1;

	res.render("digest", events);
};

exports.addEvent = function(req, res) {
	console.log("adding event...");
	var eventData = req.query;

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
}