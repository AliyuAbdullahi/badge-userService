 var config = require('./env/config')(),
    knex = require('knex'),
    badge = require('../app/features/models/userModel');

module.exports = function() {
  var db = knex({
        client: 'pg',
        connection: config.production
  });
   var badgeData = badge(db); 
  //   var User = require('../app/models/userModel')(db);

  return badgeData;

};