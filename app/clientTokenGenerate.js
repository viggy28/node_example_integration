var gateway = require('./gateway');

function clientTokenGenerate(callback) {
  gateway.clientToken.generate({}, function (err, response) {
    if (err){
      console.log(err);
      return;
    }
    callback(response.clientToken);
  });
}

module.exports = clientTokenGenerate;
