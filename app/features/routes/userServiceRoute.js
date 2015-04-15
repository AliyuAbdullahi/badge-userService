var controllerData = require('../controllers/userServiceController');
module.exports = function(app) {
  app.route('/users/signup').post(controllerData.UserSignUp).get(controllerData.getAlluser).delete(controllerData.removeUser);
  app.route('/users/login').post(controllerData.Userlogin);
  app.route('/users/:username').get(controllerData.getUserByName);
  app.route('/users/signout').post(controllerData.Usersignout);
  app.route('/users/edit').put(controllerData.updateOneUser);
  app.route('/users/delete').delete(controllerData.UserDelete);
  // app.route('users/delete').delete(controllerData.UserDelete);

};  