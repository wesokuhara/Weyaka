

  
      $("#calendarlogin").click (
        function init(event){

    	startAuth();
    	console.log("somethign happed");
    });


    

      var clientId = '897711787704-888q3u8rs86thukmam35s6eai6qa626h.apps.googleusercontent.com';
      var authorizationUrlBase = 'https://accounts.google.com/o/oauth2/auth';
      var redirect = 'https://weyaka.heroku.com/digest';
      var scopes = 'https://www.googleapis.com/auth/calendar';



      function startAuth(){
      	var url = authorizationUrlBase;
      	url += '?response_type=code'
      		+ '&redirect_uri='+encodeURIComponent(redirect)
      		+ '&client_id=' +encodeURIComponent(clientId)
      		+ '&scope=' + encodeURIComponent(scopes);

      		


          console.log("im here");
      		window.location.href=url;

      }


      function checkAuth() {
      	console.log("ssew");
        alert(gapi.auth.getToken());
      
      }

        
