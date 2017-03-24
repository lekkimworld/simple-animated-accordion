var express = require('express');
var env = require('node-env-file');
var app = express();
var port = process.env.PORT || 8080;

// Load environment variables for localhost
try {
	env(__dirname + '/.env');
} catch (e) {}

// ejs view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(__dirname + '/public'));

// add routes
app.get('/', function(req, res) {
	res.redirect('/accordion');
});
app.get('/accordion', function(req, res) {
	res.render('accordion', {});
});

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
