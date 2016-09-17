const mongoose = require('mongoose')
const bluebird = require('bluebird')
const models = require('./models')

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

// Step 1: load the JSON data
const usersJson = require('./users.json')

// Step 2: Remove all existing documents
models.User.find()
  .remove()
  .exec(onceClear)

// Step 3: load the data from the JSON file
function onceClear (err) {
  console.log('test')
  if (err) console.log(err)

  // loop over the newUserects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = usersJson.length

  for (var i = 0; i < usersJson.length; i++) {
    var json = usersJson[i]
    var newUser = new models.User(json)

    newUser.save(function (err, newUser) {
      console.log(newUser)
      if (err) console.log(err)

      to_save_count--
      console.log(to_save_count + ' left to save')

      if (to_save_count <= 0) {
        console.log('DONE')
        // The script won't terminate until the
        // connection to the database is closed
        mongoose.connection.close()
      }
    })
  }
}
