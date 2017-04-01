// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan 		     = require('morgan');
var _ 			       = require("underscore");

var path           = require('path');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400; }
}));

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/resources', express.static(__dirname + '/resources'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// routes 
require('./routes/routes_login')(app);
require('./routes/routes_grupo')(app);
require('./routes/routes_produto')(app);
require('http');

app.listen(port, function () {
	console.log('Listening at ' + port);
});

// expose app
exports = module.exports = app;
