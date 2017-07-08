//responsible for parsing the input from the POST request and call the subMerchantCreation function with a callback
//usage : http://127.0.0.1:5000/api/subMerchantCreation POST with body firstName,lastName,email or phone,dob,address
//written by VR
//https://developers.braintreepayments.com/guides/braintree-marketplace/onboarding/node

//responsible for parsing taking input from the router and call the customerCreation function with a callback
//written by VR
var gateway = require('./gateway');

//TO-DO Is there a better way to handle the email or phone requirement for submerchant creation?

subMerchantCreation = (firstName, lastName, email, phone, dateOfBirth , streetAddress,locality,region,postalCode, req, callback) => {
  console.log('firstName: ' + firstName);
  console.log('lastName: ' + lastName);
  console.log('email: ' + email);
  console.log('phone: ' + phone);
  console.log('dateOfBirth: ' + dateOfBirth);
  console.log('streetAddress: ' + streetAddress);
  console.log('locality: ' + locality);
  console.log('region: ' + region);
  console.log('postalCode: ' + postalCode);
  // if (phone == "")
  // {
  //   console.log('No Phone Number')
  //
  // }
  // else
  // {
  //   console.log('Phone Number: '+phone)
  // };
  merchantAccountParams = {
    individual:{
         firstName:firstName,
         lastName:lastName,
         email:email,
         dateOfBirth:dateOfBirth,
         address:{
         streetAddress:streetAddress,
         locality:locality,
         region:region,
         postalCode:postalCode
        }
    },
        funding: {
        // descriptor: "vig email",
        // destination: "email",
        // email: "fundings@blueladders.com"
        //descriptor: "vig email",
        destination: "email",
        email: email
    },
    tosAccepted:true,
    masterMerchantAccountId: "aprlllc",
  },
  gateway.merchantAccount.create(merchantAccountParams, function (err,result){
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
module.exports = subMerchantCreation;
