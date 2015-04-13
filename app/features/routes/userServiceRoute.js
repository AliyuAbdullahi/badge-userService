var controllerData = require('../controllers/userServiceController.js');
var express = require('express');
var router = express.Router();
module.exports = function(app) {
  router.route('/users').post(controllerData.createUser).get(controllerData.getAlluser);
  // router.route('/users/:userId')
  // .get(controllerData.getUserByName).put(controllerData.update).delete(controllerData.delete);
};