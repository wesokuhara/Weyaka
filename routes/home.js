/**
 * home.js
 * Controller class to render the home page
 *
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

const models = require('../models')
const guest = 'Guest'

exports.view = function (req, res) {
  console.log('Loading homepage')

  models.User.findOne({'username': guest})
  .then(function (user) {
    res.render('home', user)
  })
  .catch(function (err) {
    console.log('Home error', err)
  })
}
