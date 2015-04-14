var User = require('../../../config/ptgres')()[0];
jwt = require('jsonwebtoken'),
//secret = require('../../../config/env/config').secret,
//var User = require('../model/userModel')[0];
module.exports={
createUser : function(req,res){
  if(req.body.username && req.body.password){
     var profile = {
                username: req.body.username,
                email: req.body.email
            };
            var secret = 'TOPSECRETTTTT';
            var token = jwt.sign(profile, secret);
            User.forging({
              username: req.body.firstname,
                password: req.body.lastname,
                firstname: req.body.username,
                lastname: req.body.password,
                is_admin: false,
                auth: token
            }).save().then(function(method) {
                   res.json({success: "User created",
                             token: method.attributes.auth});
                });      

  }else{
     res.json({error: "You need to Register by filling the field"});
  }
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
    res.json({error: "Error saving file"});
  }
});
},

getUserByName : function(req, res){
   new User({'username':req.params.username}).fetch().then(function(data){
    res.json(data);
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
};
    
