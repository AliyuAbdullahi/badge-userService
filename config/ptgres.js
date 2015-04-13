 var config = require('../config/env/config'),
    knex = require('knex');

module.exports = function() {
  var db = knex({
        client: 'pg',
        connection: config.db  
  });
    return db;
  //   var User = require('../app/models/userModel')(db);

  // return User;

};