var User = require('../../config/postgres')()[0];
exports.createUser = function(req,res){
  new User(req.body).save().then(function(model){
    if(model){
      res.json(model);
    }
  });
};
exports.getAlluser = function(req,res){
  new User().fetchAll().then(function(data){
  if(data){
    res.json(data);
  }
});
};
exports.getUserByName = function(req, res){
  new User({username:username}).then(function(data){
   if(data){
    res.json(data);
   }
  });
};
exports.removeUser = function(req, res){
  User({"username": req.body.username}).destroy().then(function(){
    res.json("User has been destroyed");
  });

};
exports.putUser = function(req, res){
  User().set(req.params.body);
};
    