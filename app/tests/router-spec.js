var server = require('supertest');
var routes = require('../features/routes/userServiceRoute');
var service = require('../../server');
    User = require('../../config/ptgres')()[0];
    database = require('../../config/ptgres')()[1];

   describe("Testing the routes", function() {
    
    beforeEach(function(done) {
    User.forging({
     firstname:"Aliyu",
     lastname:"Olalekan",
     username:"aliyuabdullahi",
     password:"aliyuabdullahi",
        is_admin: false,
        auth: "1234"
    })       
        .save().then(function(database) {
           console.log("Data good and saved");
           done();
        });
     });
  afterEach(function(done) {
    database.knex('users')
      .where('firstname', 'Aliyu')
      .del().then(function() {
          console.log("User is out");
        });
      done();
    });

  describe("signup test", function() {
    it("should create user on post request", function(done) {
      server("http://localhost:4000/").post('users/signup')
                .send({
               firstname:"Aliyu",
               lastname:"Olalekan",
               username:"aliyuabdullahi",
               password:"aliyuabdullahi",
                is_admin: false 
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                  if(err) {
                        console.log(err);
                    }
                    expect(res.body).toEqual(jasmine.objectContaining({
                      Success: "Signed successfully"}));
                    done();
                });
              });
    it("Should have a token on signup", function(done) {
      server("http://localhost:4000/").post('users/signup')
                .send({
              firstname:"Aliyu",
              lastname:"Olalekan",
              username:"aliyuabdullahi",
              password:"aliyuabdullahi",
              is_admin: false,
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                  if(err) {
                        console.log(err);
                    }
                    expect(res.body).toBeDefined();
                      
                    done();
              });
            });
    it("should create user on post request", function(done) {
      server("http://localhost:4000/").post('users/signup')
                .send({
              firstname:"",
              lastname:"",
              username:"",
              password:"aliyuabdullahi",
                is_admin: false 
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                  if(err) {
                        console.log(err);
                    }
                    expect(res.body).toEqual(jasmine.objectContaining({
                      error: "You need to Register by filling the field"}));
                    done();
                });
              });
            });
describe("Test for user login ",function(){
  it("should log success if user logs in well", function(done){
    server("http://localhost:4000/").post('users/login')
          .send({
            username:"aliyuabdullahi",
            password:"aliyuabdullahi"
          }).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                  if(err) {
                        console.log(err);
                    }
                    expect(res.body).toEqual(jasmine.objectContaining({
                      success: "login success"
                    }));
                    done();
                  });
                });
  it("should throw error when the username or password is invalid",function(done){
    server("http://localhost:4000/").post('users/login')
          .send({
            username:"ali",
            password:"aliyuabdullahi"
          }).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                  if(err) {
                        console.log(err);
                    }
                    expect(res.body).toEqual(jasmine.objectContaining({
                     error: "Check login info, its invalid!"
                    }));
                    done();
                  });
                });
              });
describe("Logout test",function(){
  it("should log user out when logout is selected",function(done){
    server("http://localhost:4000/").post('users/signout')
      .send({
            username:"aliyuabdullahi",
            password:"aliyuabdullahi"
          }).set('Accept','application/json')
            .expect('Content-Type',/json/)
            .expect(200)
            .end(function(err,res){
                if(err){
                     console.log(err);
            }
  expect(res.body).toEqual(jasmine.objectContaining({Offline: "You are now offline"}));
  done();
});
});
  it("should log error if logout is not successful",function(){
    server("http://localhost:4000/").post('users/signout')
      .send({
            username:"aliyuabdu",
            password:"aliyuabdullahi"
          }).set('Accept','application/json')
            .expect('Content-Type',/json/)
            .expect(200)
            .end(function(err,res){
                if(err){
                     console.log(err);
            }
  expect(res.body).toEqual(jasmine.objectContaining({error: "Enter valid user to sign out user"}));
              done();
          });

        });   
     });
// describe("Delete user test",function(){
//   it("should delete the user specified when called",function(done){
//     server("http://localhost:4000/").delete('users/delete')
//       .send({
//             username:"aliyuabdullahi"
//           }).set('Accept','application/json')
//             .expect('Content-Type',/json/)
//             .expect(200)
//             .end(function(err,res){
//                 if(err){
//                      console.log(err);
//             }
//             expect(res.body).toEqual(jasmine.objectContaining({success: "Delete success"}));
//               done();
//           });
//   });
// });
  });
