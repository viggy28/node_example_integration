var express = require('express');
var app = module.exports = express();

var clientTokenGenerate = require('../../app/clientTokenGenerate');

//Respond to client token request
app.get('/request', function (req, res) {

  clientTokenGenerate((token) => {res.send(token)});

});
