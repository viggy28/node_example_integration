//responsible for parsing the input from the POST request and call the customerCreation function with a callback
//usage : http://127.0.0.1:5000/api/customerCreation POST with body firstName,lastName,email,id
//written by VR

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
  //TO-DO Do you really want the nonce here?
  //var nonceFromTheClient =  req.body.payment_method_nonce;
  console.log('Got a new customer!');
  console.log('customer id!' + id);
  customerCreation(firstName,lastName, email, id, req, (customerCreationResult) => {
    res.send(customerCreationResult);
  });
});
