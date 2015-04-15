var User = require('../../../config/ptgres')()[0];
jwt = require('jsonwebtoken'),

module.exports={
UserSignUp : function(req,res){
  if(req.body.username && req.body.password){
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
                   res.json({data: data,
                    Success:"Signed successfully"});
                   
                });      

  }
  else
  {
     res.json({error: "You need to Register by filling the field"});
  }
},

Userlogin: function(req, res) {
    new User({"username": req.body.username,
              "password": req.body.password})
        .fetch()
        .then(function(data) {
            if(data) {
              console.log(data);
                 res.json({success: "login success"}); 
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

Usersignout : function(req, res) {
    new User({username: req.body.username})
        .fetch()
        .then(function(model) {
            if(model) {
                model.set({"auth": 0});
                res.json({ Signedout: "You will be given another token",
                           token: model.get("auth")});
            }
            else {
                res.json({error: "Enter valid user to sign out user"});
            }
        });
},

getUserByName : function(req, res){
   new User({'username':req.params.username}).fetch().then(function(data){
    res.json(data);
  });
},

UserDelete : function(req, res) {
    new User({"username": req.body.username})
        .fetch()
        .then(function(model) {
            if(model) {
                db.knex('users')
                  .where("username", req.body.username)
                  .del().then(function() {
                      res.json({success: "The account is deleted"});
                  });
            }
            else {
                res.json({error: "The user does not exists"});
            }
        });
},

removeUser: function(req, res){
 new User({username: req.body.username}).fetch().then(function(data){
    if(data){
      data.destroy().save().then(function(){
        res.json({Success: "File deleted"});
      });
    }
    res.json("User has been destroyed");
  });
},

putUser: function(req, res){
    User().set(req.params.body);
  }
}
    
