var express = require('express');
var app = module.exports = express();

var transactionSale = require('../../app/transactionSale');
var insuranceFee = 5;
var stateTaxPct = 0.09;
var aprlServicePct = 0.04;
// path = /api/transaction

app.use(function (req, res, next) {
  console.log(req.body);
  var amount = req.body.amount;
  var nonceFromTheClient = req.body.payment_method_nonce;
  var netAmount = amount + insuranceFee + (stateTax*amount);
  var serviceFeeAmount = (aprlServicePct * amount);
  console.log('Got a nonce!');
  transactionSale(nonceFromTheClient,netAmount,serviceFeeAmount, req, (transactionResult) => {
    res.send(transactionResult);
  });
});
