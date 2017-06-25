var express = require('express');
var app = module.exports = express();

var customerCreation = require('../../app/customerCreation');

// path = /api/transaction

app.use(function (req, res, next) {
  console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var customerId = req.body.userId;
  console.log('Got a new customer!');
  customerCreation(firstName,lastName, email, customerId,req, (customerCreationResult) => {
    res.send(customerCreationResult);
  });
});
