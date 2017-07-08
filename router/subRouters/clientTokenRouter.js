var express = require('express');
var app = module.exports = express();
var url = require('url');
var clientTokenGenerate = require('../../app/clientTokenGenerate');

//Respond to client token request
app.get('/request', function (req, res) {
  var queryData = url.parse(req.url, true).query;
  var customerId = queryData.id;
  clientTokenGenerate(customerId, (token) => {res.send(token)});

});
