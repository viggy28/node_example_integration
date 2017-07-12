var express = require('express');
var app = module.exports = express();

var transactionRouter = require('./subRouters/transactionRouter');
var clientTokenRouter = require('./subRouters/clientTokenRouter');
var customerRouter = require('./subRouters/customerRouter');
var customerCreationRouter = require('./subRouters/customerCreationRouter');
var subMerchantCreationRouter = require('./subRouters/subMerchantCreationRouter');
var webhookRouter = require('./subRouters/webhookRouter');

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

app.get('/endpoints', function(req, res) {
  res.render('pages/apiEndpoints');
});

app.use('/transaction', transactionRouter);
app.use('/clientToken', clientTokenRouter);
app.use('/customer', customerRouter);
app.use('/customerCreation',customerCreationRouter);
app.use('/subMerchantCreation',subMerchantCreationRouter);
app.post('/webhooks',webhookRouter);
