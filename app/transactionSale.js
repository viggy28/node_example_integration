var gateway = require('./gateway');

transactionSale = (nonceFromTheClient, netAmount, serviceFeeAmount, req, callback) => {
  console.log('Nonce: ' + nonceFromTheClient);
  gateway.transaction.sale({
    amount: netAmount,
    serviceFeeAmount: serviceFeeAmount,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    if (err) {
      console.log('error!');
      console.log(err);
      return err;

    } else {
      req.result = result;
      callback(result);
    };

  });
}

module.exports = transactionSale;
