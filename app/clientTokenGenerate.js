var gateway = require('./gateway');

function clientTokenGenerate(customerId, callback) {
  gateway.clientToken.generate({customerId: customerId}, function (err, response) {
    if (err){
      console.log(err);
      return;
    }
    callback(response.clientToken);
  });
}

module.exports = clientTokenGenerate;
