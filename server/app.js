var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
import cors from 'cors';
var logger = require('morgan');

import indexRouter from './routes/index'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors({ maxAge: 86400 }));


app.use('/', indexRouter);

module.exports = app;
