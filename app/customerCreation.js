//responsible for parsing taking input from the router and call the customerCreation function with a callback
//written by VR
var gateway = require('./gateway');

customerCreation = (firstName, lastName, email, id, req, callback) => {
  console.log('firstName: ' + firstName);
  console.log('lastName: ' + lastName);
  console.log('email: ' + email);
  console.log('id: ' + id);
  //TO-DO Do you really want the nonce here?
  //console.log('nonceFromTheClient '+ nonceFromTheClient);
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
      console.log('inside cc');
    };
  });
}

module.exports = customerCreation;
