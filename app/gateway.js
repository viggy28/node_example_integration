var braintree = require('braintree');

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'k3gzkrwkr99fhw3k',
    publicKey:    'v7w6s84g6z4jzqtw',
    privateKey:   '0fdc9879138c558a0fd56fa7ef7d173b'
});

module.exports = gateway;
