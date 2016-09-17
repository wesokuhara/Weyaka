/**
 * app.js
 * Declares all module dependencies
 *
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */
const express = require('express')
const http = require('http')
const path = require('path')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const serveStatic = require('serve-static')

// const login = require('./routes/login')
const home = require('./routes/home')
const digest = require('./routes/digest')
const about = require('./routes/about')

// Connect to the Mongo database, whether locally or on Heroku
mongoose.Promise = bluebird
const local_database_name = 'weyaka'
const local_database_uri = 'mongodb://localhost/' + local_database_name
const database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri)
.then(function () {
  console.log('Connected to', database_uri)
})
.catch(function (err) {
  console.log('Failed to connect to MongoDB', err.message)
  process.exit(1)
})

const app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.use(logger('dev'))
app.use(methodOverride())
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser('Intro HCI secret key'))
app.use(serveStatic(path.join(__dirname, 'public')))

// development only
if (app.get('env') === 'development') {
  app.use(errorhandler())
}

// ROUTES
app.get('/', home.view)
app.get('/home', home.view)
app.get('/digest', digest.view)
app.get('/about', about.view)

app.post('/addNote', digest.addNote)
app.post('/addEvent', digest.addEvent)

app.post('/deleteNote/:id', digest.deleteNote)
app.post('/deleteEvent/:id', digest.deleteEvent)

const server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'))
})
