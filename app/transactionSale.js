var gateway = require('./gateway');

transactionSale = (nonceFromTheClient, amount, req, callback) => {
  console.log('Nonce: ' + nonceFromTheClient);
  gateway.transaction.sale({
    amount: amount,
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
