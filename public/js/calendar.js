function callingnow() {

    function init(){

    	startAuth();
    	console.log("somethign happed");
    }
    </script>
    <script type="text/javascript" src="https:apis.google.com/js/client.js?onload=init"></script>
    <script>

      var clientId = '897711787704-888q3u8rs86thukmam35s6eai6qa626h.apps.googleusercontent.com';
      var authorizationUrlBase = 'https://accounts.google.com/o/oauth2/auth';
      var redirect = 'https://weyaka.heroku.com/home';
      var scopes = 'https://www.googleapis.com/auth/calendar';



      function startAuth(){
      	var url = authorizationUrlBase;
      	url += '?response_type=token'
      		+ '&redirect_uri='+encodeURIComponent(redirect)
      		+ '&client_id=' +encodeURIComponent(clientId)
      		+ '&scope=' + encodeURIComponent(scopes);

      		console.log("im here");
      		var w= window.open(url,'oauth','width=500, height=500');
      }


      function checkAuth() {
      	console.log("ssew");
        alert(gapi.auth.getToken());
      
      }

        
}