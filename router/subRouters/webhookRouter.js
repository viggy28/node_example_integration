var express = require('express');
var app = module.exports = express();
var url = require('url');
var gateway = require('../../app/gateway');

app.post("/webhooks", function (req, res) {
  gateway.webhookNotification.parse(
    req.body.bt_signature,
    req.body.bt_payload,
    function (err, webhookNotification) {
      console.log("[Webhook Received " + webhookNotification.timestamp + "] | Kind: " + webhookNotification.kind);

      // Example values for webhook notification properties
      console.log(webhookNotification.kind); // "subscriptionWentPastDue"
      console.log(webhookNotification.timestamp); // Sun Jan 1 00:00:00 UTC 2012
    }
  );
  res.status(200).send();
});
