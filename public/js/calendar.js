

var events = require("../../events.json");

$("#googleLink").click( function init(event){
 	startAuth();
 	console.log("Signing in to Google Calendar");
});

var authorizationUrlBase = 'https://accounts.google.com/o/oauth2/auth';
var redirect = 'https://www.google.com/calendar/render';
var clientId = '897711787704-k22vac8ld5e5duptvne3fjjbtvgl01ss.apps.googleusercontent.com';
var scopes = 'https://www.googleapis.com/auth/calendar';


function startAuth(event){
	var url = authorizationUrlBase;
	url += '?response_type=token'
		+ '&redirect_uri='+encodeURIComponent(redirect)
		+ '&client_id=' +encodeURIComponent(clientId)
		+ '&scope=' + encodeURIComponent(scopes);

	window.open(url);
}


  function popup(event)
   {

    window.open("../../views/test.html");

   }


    var timecount=0;
   function showEvent(event)

   {

   
   var title = document.getElementById("calendarform").elements[0].value;
   var location = document.getElementById("calendarform").elements[1].value;
   var date = document.getElementById("calendarform").elements[2].value;
   var time = document.getElementById("calendarform").elements[3].value;

     window.alert("Event Successfully Added");
    

          



        $("#currenteventlist").html(eventhtml);

        var storing = {

          "title":document.getElementById("calendarform").elements[0].value,
          "location": document.getElementById("calendarform").elements[1].value,
          "date": document.getElementById("calendarform").elements[2].value,
          "time": document.getElementById("calendarform").elements[3].value
        }

        //events["events"].push(storing);
      //res.render("index", events);
      //document.write(storing);





   console.log(eventhtml);
}

   /**

    $("#loggedin").click(function dothis(event){

    console.log("posting");

    $.get("https://accounts.google.com/o/oauth2/v3/token", listEvent);


   });






function listEvent(result)
{
  console.log(result['access_token']);
}

*/