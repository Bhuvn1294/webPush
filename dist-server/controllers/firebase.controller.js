"use strict";

var admin = require('./firebase-config.js');

var notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};

function sendNotification() {
  var registrationToken = req.body.registrationToken;
  var message = req.body.message;
  var options = notification_options;
  admin.messaging().sendToDevice(registrationToken, message, options).then(function (response) {
    res.status(200).send("Notification sent successfully" + response);
  })["catch"](function (error) {
    console.log(error);
  });
}