var db = require("./config/ptgres")();


//var app = express();
var config = require('./config/env/config')();
var app = require('./config/express')();
app.listen(config.port, function () {
    console.log('Express Servicce  app listening on port: ' + config.port);
});
module.exports = app;


