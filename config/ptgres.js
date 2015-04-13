 var config = require('./env/config')(),
    knex = require('knex'),
    anything = require('../app/features/models/userModel');

module.exports = function() {
  var db = knex({
        client: 'pg',
        connection: config.db.connection 
  });
   var shit = anything(db); 
  //   var User = require('../app/models/userModel')(db);

  return shit;

};