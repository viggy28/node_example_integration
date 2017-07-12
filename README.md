//Written by VR

This program is the complete backend of the payment processing.

It is based on the email(node_example_integration) from the BT to Vignesh on 06/19/17. I took whatever they sent and started expanding. Honestly, I don't clearly understand the concepts, but somehow writing something to make things work.

The routers are basically the ones that parse the data from the front end and calls the actual functions which are inside app directory.

The js inside the app actually calls the BT's APIs.

How to use the APIs:-

customerCreation:
  Method     : POST
  path       : /api/customerCreation
  Parameters : firstName, lastName, email, id  

clientTokenGenerate:
  Method     : GET
  path       : /api/clientToken/request
  Parameters : id

customerFind:
  Method     : GET
  path       : /api/customer/find
  Parameters : id  

transaction:
  Method     : POST
  path       : /api/transaction
  Parameters :
        amount
        nonceFromTheClient
        netAmount - The actual(listed) lending price.

subMerchantcreation:
  Method     : POST
  path       : /api/subMerchantcreation
  Parameters :
      firstName
      lastName
      email
      phone - 10 digit number
      dateOfBirth - YYYYMMDD or YYYY-MM-DD format
      streetAddress - Should include an appartment or house number
      locality - city
      region - state
      postalCode -
https://developers.braintreepayments.com/reference/request/merchant-account/create/node

webhookRouter:
  This is for the webhook (to notify the status of subMerchantcreation)
  Method     : POST
  path       : /api/webhooks
  Parameters : bt_signature
               bt_payload
