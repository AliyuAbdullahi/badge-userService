var controllerData = require('./controllers/userServiceController.js');
module.exports = function(app) {
 app.route('/users').post(users.createUser).get(users.getAlluser);
 app.route('/users/:userId/badge').post(users.createBadge).get(users.read);
 app.route('/users/:userId')
 .get(users.read).put(users.update).delete(users.delete);
 app.param('userId', users.userByID);
};