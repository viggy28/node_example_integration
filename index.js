var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');

var apiRouter = require('./router');

var gateway = require('./app/gateway');
var transactionSale = require('./app/transactionSale');


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('pages/apiEndpoints');
});

app.use('/api', apiRouter);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
