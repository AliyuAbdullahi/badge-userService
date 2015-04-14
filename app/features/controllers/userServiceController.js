var User = require('../../../config/ptgres')()[0];
//var User = require('../model/userModel')[0];
module.exports={
createUser : function(req,res){
  console.log('create');
  User.forge(req.body).save().then(function(model){
    if(model){
      res.json(model);
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
getOneUser:function(req,res){
  new User().fetch().then(function(collection) {
  collection.at(0)
  .load(['username', 'firstname', 'lastname'])
  .then(function(model) {
    JSON.stringify(model);
  });
});
},
getUserByName : function(req, res){
   new User({'username':req.params.username}).fetch().then(function(data){
    res.json(data);
  });
},
removeUser: function(req, res){
  User({username: req.body.username}).destroy().then(function(){
    res.json("User has been destroyed");
  });

},
putUser: function(req, res){
  User().set(req.params.body);
}
};
    