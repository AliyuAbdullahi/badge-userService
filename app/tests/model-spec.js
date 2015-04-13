var User = require('../../config/ptgres')()[0],
    db = require('../../config/ptgres')()[1],
    user;

describe('userModel Test', function() {
    
    beforeEach(function(done) {
      user = new User({
        username: "bello",
        password: "fadilat",
        firstname: "opeyemi",
        lastname: "taiwo",
        is_admin: false,
        auth: "4444"
      });
      done();
    });

    afterEach(function(done) {
        db.knex('users')
          .where('username', "bello")
          .del().then(function() {
             console.log("DataBase has been created successfully");
          });
        done();
    });

    describe("Save row", function() {
      it("should be able to save table row without issues", function(done) {
            user.save().then(function(model) {
                expect(model.attributes).toEqual(jasmine.objectContaining({
                    "username": "bello",
                    "password": "fadilat"
                }));
                 done();
            });
      });
    });
});
    

