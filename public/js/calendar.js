

  
      $("#calendarlogin").click (
        function init(event){

    	startAuth();
    	console.log("somethign happed");
    });


    

      var clientId = '897711787704-gohcd3g1uffe71j4ugven87hjnuqjgub.apps.googleusercontent.com';
      var authorizationUrlBase = 'https://accounts.google.com/o/oauth2/auth';
      var redirect = 'https://weyaka.herokuapp.com/digest';
      var scopes = 'https://www.googleapis.com/auth/calendar';



      function startAuth(event){
      	var url = authorizationUrlBase;
      	url += '?response_type=code'
      		+ '&redirect_uri='+encodeURIComponent(redirect)
      		+ '&client_id=' +encodeURIComponent(clientId)
      		+ '&scope=' + encodeURIComponent(scopes);
   
   
      		window.location.href=url;

   }
