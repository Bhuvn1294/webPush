"use strict";

var admin = require("firebase-admin");

var serviceAccount = require("./my-secret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sample-project-e1a84.firebaseio.com"
});
module.exports = admin;