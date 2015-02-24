/**
 * app.js
 * Declares all module dependencies
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// LOAD JS MODULES //////////////////////////////////////////////////
var login = require('./routes/login');
var home = require('./routes/home');
var digest = require('./routes/digest');
var help = require('./routes/help');

var addEvent = require('./routes/addEvent');

/////////////////////////////////////////////////////////////////////

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// ROUTES - CALLS JS CONTROLLER METHOD //////////////////////////////
app.get('/', login.view); //login page

app.get('/home', home.view); //home page

app.get('/digest', digest.view); //digest page

app.get('/help', help.view); //help page

app.get('/addEvent', addEvent.view); //add event page

/////////////////////////////////////////////////////////////////////

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
