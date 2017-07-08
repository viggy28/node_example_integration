//responsible for parsing the input from the POST request and call the subMerchantCreation function with a callback
//usage : http://127.0.0.1:5000/api/subMerchantCreation POST with body firstName,lastName,email or phone,dob,address
//written by VR

//TO-DO It is handling only the "individual" subMerchant.
//Need to setup for "Business" account type.

var express = require('express');
var app = module.exports = express();

var subMerchantCreation = require('../../app/subMerchantCreation');

// path = /api/customerCreation

app.use(function (req, res, next) {
  console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var phone = req.body.phone;
  var dateOfBirth = req.body.dateOfBirth;
  var streetAddress = req.body.streetAddress;
  var locality = req.body.city;
  var region = req.body.state;
  var postalCode = req.body.zipcode;
  //var destination = req.body.bank;
  console.log('Got a new submerchant!');
  subMerchantCreation(firstName,lastName, email, phone, dateOfBirth, streetAddress,locality,region,postalCode, req, (subMerchantCreationResult) => {
    res.send(subMerchantCreationResult);
  });
});
