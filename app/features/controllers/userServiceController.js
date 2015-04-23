var User = require('../../../config/ptgres')()[0];
    databaseContent = require('../../../config/ptgres')()[1];
jwt = require('jsonwebtoken'),

module.exports={
  userVerify:function(req,res){
    jwt.verify(req.body.auth, 'TOPSECRETTTTT', function(err, decoded) {
    if(err){
      res.json({Error:"Token cannot be verified"});
    }
    else{
      console.log(decoded.username);
      console.log(typeof decoded);
      res.json({Success:decoded.username});

    }
});
  },
UserSignUp : function(req,res){
  if(req.body.username && req.body.password){
    new User({'username': req.body.username}).fetch().then(function(data){
      if(data){
    res.json({Error:"User already exit Enter a different user name"});
    }
    else{
     var userInfo = {
                username: req.body.username,
                password:req.body.password
            };
            var secret = 'TOPSECRETTTTT';
            var token = jwt.sign(userInfo, secret);
            User.forging({
               firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                is_admin: false,
                auth: token
            }).save().then(function(data) {
                   res.json({Success:"Signed successfully"});    
                });      
              }
          });
        } 
else{
  res.json("Enter a valid username and password to signup");
}
},
Userlogin: function(req, res) {
    new User({"username": req.body.username,
              "password": req.body.password})
        .fetch()
        .then(function(data) {
            if(data) {
              console.log(data);
                 res.json({success: "login success",
                 token: data.attributes.auth}); 
            }
            else {
                res.json({error: "Check login info, its invalid!"});
            }
        }); 
      },

getAlluser : function(req,res){
    new User().fetchAll().then(function(data){
            if(data){
              res.json(data);
           }
        });
      },

updateOneUser:function(req,res){
    new User({'username': req.body.oldname}).fetch().then(function(data){
            if(data){
                delete req.body.oldname;
                data.save(req.body, {patch: true}).then(function(){
                  res.json({success: "User data saved successfully"});
            });
          }
            else{
                res.json({error: "Error saving the user file "});
            }
          });
        },

Usersignout: function(req, res) {
    new User({username: req.body.username})
        .fetch()
        .then(function(data) {
            if(data) {
                data.set({"auth": 0});
                res.json({ Offline: "You are now offline",
                           });
            }
            else {
                res.json({error: "Enter valid user to sign out user"});
            }
        });
      },

getUserByName : function(req, res){
    new User({'username':req.body.username}).fetch().then(function(data){
          res.json(data);
        });
      },

removeUser: function(req, res){
 new User({username: req.body.username}).fetch().then(function(data){
        if(data){
             data.destroy().then(function(){
                console.log("here");
                res.json({Success: "File deleted"});
        });
      }
  });
},

UserDelete : function(req, res) {
    new User({"username": req.body.username})
        .fetch()
        .then(function(data) {
            if(data) {
                databaseContent.knex('users')
                  .where("username", req.body.username)
                  .del().then(function() {
                      res.json({success: "Delete success"});
                  });
            }
            else {
                res.json({error: "Unidentified User"});
            }
        });
      },

putUser: function(req, res){
    User().set(req.params.body);
  }
}
    
