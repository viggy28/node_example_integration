var gateway = require('./gateway');

customerCreation = (firstName, lastName, email, id, req, callback) => {
  console.log('firstName: ' + firstName);
  console.log('lastName: ' + lastName);
  gateway.customer.create({
    firstName: firstName,
    lastName: lastName,
    email : email,
    id : id
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
