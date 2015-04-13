var config = require('./config'),
    knex = require('knex');

module.exports = function() {
  var db = knex({
        client: 'pg',
        connection: config.db  
  });
    
    var User = require('../app/models/userModel')(db);

  return User;

};