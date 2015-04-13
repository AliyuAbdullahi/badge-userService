var User = require('../../../config/ptgres')()[0];
//var User = require('../model/userModel')[0];
module.exports={
createUser : function(req,res){
  console.log('crete');
  User.forge(req.body).save().then(function(model){
    if(model){
      res.json(model);
    }
  });
},
getAlluser : function(req,res){
  User().fetchAll().then(function(data){
  if(data){
    res.json(data);
  }
});
},
getUserByName : function(req, res){
  new User({username:username}).then(function(data){
   if(data){
    res.json(data);
   }
  });
},
removeUser: function(req, res){
  User({"username": req.body.username}).destroy().then(function(){
    res.json("User has been destroyed");
  });

},
putUser: function(req, res){
  User().set(req.params.body);
}
};
    