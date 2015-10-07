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
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');
var errorhandler = require('errorhandler');

// LOAD JS MODULES //////////////////////////////////////////////////
var login = require('./routes/login');
var home = require('./routes/home');
var digest = require('./routes/digest');
var about = require('./routes/about');
/////////////////////////////////////////////////////////////////////

//Connect to the Mongo database, whether locally or on Heroku
var local_database_name = 'weyaka';
var local_database_uri = 'mongodb://localhost/' + local_database_name;
var database_uri = process.env.MONGOLAB_URI || local_database_uri;
mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

var favicon = require('serve-favicon');
//app.use(favicon(__dirname + '/public/favicon.ico'));

var logger = require('morgan');
app.use(logger('dev'));

var methodOverride = require('method-override');
app.use(methodOverride());

var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// var multer = require('multer');
// app.use(multer());

var cookieParser = require('cookie-parser');
app.use(cookieParser('Intro HCI secret key'));

var serveStatic = require('serve-static');
app.use(serveStatic(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  // error handling middleware
  app.use(errorhandler());
}

// ROUTES - CALLS JS CONTROLLER METHOD //////////////////////////////
app.get('/', home.view); //login page
app.get('/home', home.view); //home page
app.get('/digest', digest.view); //digest page
app.get('/about', about.view); //help page

app.post('/addNote', digest.addNote); //add note
app.post('/addEvent', digest.addEvent); //add event

app.post('/deleteNote/:id', digest.deleteNote); //delete a note
app.post('/deleteEvent/:id', digest.deleteEvent); //delete an event
/////////////////////////////////////////////////////////////////////

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
