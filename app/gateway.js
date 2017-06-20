var braintree = require('braintree');

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'YOUR_MERCHANT_ID',
    publicKey:    'YOUR_PUBLIC_KEY',
    privateKey:   'YOUR_PRIVATE_KEY'
});

module.exports = gateway;
