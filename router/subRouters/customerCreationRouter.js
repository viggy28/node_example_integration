var express = require('express');
var app = module.exports = express();

var transactionSale = require('../../app/customerCreationRouter');

// path = /api/transaction

app.use(function (req, res, next) {
  console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var customerId = req.body.userId;
  console.log('Got a new customer!');
  transactionSale(nonceFromTheClient,amount, req, (transactionResult) => {
    res.send(transactionResult);
  });
});
