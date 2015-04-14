  var config = require('../../../config/env/config'),
   
      bookshelfData = require('bookshelf');

module.exports = function(knex) {
  var db = bookshelfData(knex);

  db.knex.schema.hasTable("users").then(function(warriorExists) {
         if(!warriorExists) {
              db.knex.schema.createTable("users", function(dataTable) {
              dataTable.increments("id").primary();
              dataTable.string('firstname');
              dataTable.string('lastname');
              dataTable.string('username');
              dataTable.string('password'); 
              dataTable.boolean('is_admin');
              dataTable.string('auth');
              dataTable.timestamps();
            }).then(function() {
              console.log("created");
            });
         }
     });   
  var User = db.Model.extend({
    tableName: 'users',
      hasTimestamps: true},
    {
        forging: function(params) {
          params.password = params.password || "default"; 
          // params.password = this.hashPassword(params.password);       
        var save = this.forge(params);
        return save;
        },

        // hashPassword: function(password) {
        //    // var salt = new Buffer("65".toString('base64'), 'base64');
        //    // return crypto.pbkdf2Sync(password, salt, 4096, 64).toString('base64');
        //    return crypto(password);
        //   }

  });


  return [User, db];
};