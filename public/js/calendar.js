

  
      $("#googleLink").click(
        function init(event){

    	startAuth();
    	console.log("somethign happed");
    });


    

      var clientId = '897711787704-k22vac8ld5e5duptvne3fjjbtvgl01ss.apps.googleusercontent.com';
      var authorizationUrlBase = 'https://accounts.google.com/o/oauth2/auth';
      var redirect = 'https://www.google.com/calendar/render';
      var scopes = 'https://www.googleapis.com/auth/calendar';


    var url;
      function startAuth(event){
      	url = authorizationUrlBase;
      	url += '?response_type=token'
      		+ '&redirect_uri='+encodeURIComponent(redirect)
      		+ '&client_id=' +encodeURIComponent(clientId)
      		+ '&scope=' + encodeURIComponent(scopes);
   
   
      		window.open(url);
   }
var timecount=0;
   function showEvent(event)

   {

  
   var title = document.getElementById("calendarform").elements[0].value;
   var location = document.getElementById("calendarform").elements[1].value;
   var date = document.getElementById("calendarform").elements[2].value;
   var time = document.getElementById("calendarform").elements[3].value;

   var eventhtml = "Event Added :"+"<br>Event title= \"" + title +"\""+"<br>Location= \" "+ location + "\" "+"<br>Date: " + date+"\""+"<br>Time: "+ time +"\"<br> <br>";

          

        $("#currenteventlist").html(eventhtml);

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