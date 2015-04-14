var controllerData = require('../controllers/userServiceController');
module.exports = function(app) {
  app.route('/users').post(controllerData.createUser).get(controllerData.getAlluser);
  app.route('/users/:username').get(controllerData.getUserByName);

};