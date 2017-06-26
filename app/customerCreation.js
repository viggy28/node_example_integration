var gateway = require('./gateway');

customerCreation = (firstName, lastName, email, id, nonceFromTheClient, req, callback) => {
  console.log('firstName: ' + firstName);
  console.log('lastName: ' + lastName);
  console.log('email: ' + email);
  console.log('id: ' + id);
  console.log('nonceFromTheClient '+ nonceFromTheClient);
  gateway.customer.create({
    firstName: firstName,
    lastName: lastName,
    email : email,
    id : id,
    paymentMethodNonce : nonceFromTheClient
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

module.exports = customerCreation;
