var controllerData = require('../controllers/userServiceController');
module.exports = function(app) {
  app.route('/users').post(controllerData.createUser).get(controllerData.getAlluser);
  // app.route('/users').get(controllerData.getAllUser);
  // router.route('/users/:userId')
  // .get(controllerData.getUserByName).put(controllerData.update).delete(controllerData.delete);
};