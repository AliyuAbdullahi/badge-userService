var express = require('express'),
    morgan = require('morgan'),
    routes = require('../app/features/routes/userServiceRoute'),
    bodyParser = require('body-parser');
    var router = express.Router();
    // methodOverride = require('method-override');
    console.log("crap");
module.exports = function() {
  var app = express();
  

  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  // app.use(methodOverride());
  app.use('/', router);

  routes(router);
   
  //routes = require('../app/features/routes/userServiceRoute');
  //routes(router);
  return app;
};