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
	
	for(var i = 0; i< events['events'].length; i++)	
	{
	for(var j = 0; j < events['events'].length-1;j++)
	{
		if(events['events'][j]['time']<events['events'][j+1]['time'])
		{
			var temp = ['events'][j];
			['events'][j]= ['events'][j+1];
			['events'][j+1]=temp;
			}
	}
}



	res.render('digest', events);

};



/**cming through notes*/
exports.notes= function(req, res) {

	console.log(req.query);

	var jsonobject ={
	"title": req.query.title,
	"summary": req.query.summary
}

	console.log(events['notecount']);
	events["notes"].push(jsonobject);
	events['notecount'] =events['notecount']+1;
	console.log(events['notecount']);
	res.render('digest', events);

};