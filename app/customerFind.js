var gateway = require('./gateway');

function customerFind(customerId, callback) {
  console.log(customerId);
  gateway.customer.find(customerId, function(err, customer) {
    if (err) {
      console.log(err);
      return;
    }
    callback(customer);
  });
}

module.exports = customerFind;
