"use strict";

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, '../public')));
app.use((0, _cors["default"])({
  maxAge: 86400
}));
app.use('/', _index["default"]);
module.exports = app;