var express = require('express');
var app = module.exports = express();

var customerCreation = require('../../app/customerCreation');

// path = /api/customerCreation

app.use(function (req, res, next) {
  console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var id = req.body.id;
  console.log('Got a new customer!');
  console.log('customer id!' + id);
  customerCreation(firstName,lastName, email, id,req, (customerCreationResult) => {
    res.send(customerCreationResult);
  });
});
