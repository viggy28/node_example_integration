var express = require('express');
var app = module.exports = express();
var url = require('url');

var customerFind = require('../../app/customerFind');

app.get('/find', function (req, res) {

  var queryData = url.parse(req.url, true).query;
  var customerId = queryData.id;
  customerFind(customerId, (customer) => {res.send(customer)});
});
