var express = require('express');
var app = module.exports = express();

var transactionSale = require('../../app/transactionSale');

// path = /api/transaction

app.use(function (req, res, next) {
  // console.log('request body:' req.body)
  var amount = req.body.amount;
  var nonceFromTheClient = req.body.payment_method_nonce;
  console.log('Got a nonce!');
  transactionSale(nonceFromTheClient,amount, req, (transactionResult) => {
    res.send(transactionResult);
  });
});
